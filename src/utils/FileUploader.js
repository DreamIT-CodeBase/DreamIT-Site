import { v4 as uuid } from 'uuid';
import axios from 'axios';
//File uploader
 
export default class FileUploader {
    static validate(file, config) {
        if (!config) {
            return;
        }

        if (config.image) {
            if (!file.type.startsWith('image')) {
                throw new Error('You must upload an image');
            }
        }

        if (config.storage?.maxSizeInBytes && file?.size > config.storage?.maxSizeInBytes) {
            throw new Error('File is too big.');
        }

        const extension = extractExtensionFrom(file.name);

        if (config.formats && !config.formats.includes(extension)) {
            throw new Error(`Invalid format..`);
        }
    }

    static async uploadFromRequest(request, config, onSuccess, onError) {
        try {
            this.validate(request.file, config);
        } catch (error) {
            request.onError(error);
            onError(error);
            return;
        }

        const extension = extractExtensionFrom(request.file.name);
        const id = uuid();
        const filename = `${id}.${extension}`;

        this.fetchFileCredentials(filename, config)
            .then(({ uploadCredentials, downloadUrl, privateUrl }) => {
                return this.uploadToServer(request.file, uploadCredentials).then(() => {
                    request.onSuccess();
                    onSuccess({
                        id: id,
                        name: request.file.name,
                        sizeInBytes: request.file?.size,
                        type: config.storage?.attachmentType || 'resume',
                        publicUrl: uploadCredentials && uploadCredentials.publicUrl ? uploadCredentials.publicUrl : null,
                        privateUrl,
                        downloadUrl,
                        new: true
                    });
                });
            })
            .catch((error) => {
                request.onError(error);
                onError(error);
            });
    }

    static async upload(file, config) {
        try {
            this.validate(file, config);
        } catch (error) {
            return Promise.reject(error);
        }

        const extension = extractExtensionFrom(file.name);
        const id = uuid();
        const filename = `${id}.${extension}`;

        const { uploadCredentials, downloadUrl, privateUrl } = await this.fetchFileCredentials(filename, config);

        await this.uploadToServer(file, uploadCredentials);

        return {
            id: id,
            name: file.name,
            sizeInBytes: file.size,
            type: config.storage?.attachmentType || 'resume',
            publicUrl: uploadCredentials && uploadCredentials.publicUrl ? uploadCredentials.publicUrl : downloadUrl,
            privateUrl,
            downloadUrl,
            new: true
        };
    }

    static async fetchFileCredentials(filename, config) {
        const tenantId = '67c9764e01facb84729efc14';

        const { data } = await axios.get(`https://cs.fabbuilder.com/api/tenant/${tenantId}/file/credentials`, {
            params: {
                filename: filename,
                storageId: config.storage.id,
                attachmentType: config.storage.attachmentType || 'resume',
                type: 'resume'
            }
        });

        return data;
    }

    static async uploadToServer(file, uploadCredentials) {
        try {
            const url = uploadCredentials.url;
            const formData = new FormData();

            if (uploadCredentials.fields) {
                for (const [key, value] of Object.entries(uploadCredentials.fields || {})) {
                    formData.append(key, value);
                }
            }

            formData.append('file', file);

            return axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

function extractExtensionFrom(filename) {
    if (!filename) {
        return null;
    }

    const regex = /(?:\.([^.]+))?$/;
    const exec = regex.exec(filename);

    if (!exec) {
        return null;
    }

    return exec[1];
}
