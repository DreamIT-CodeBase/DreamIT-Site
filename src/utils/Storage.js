/**
 * Storage permissions.
 *
 * @id - Used to identify the rule on permissions and upload.
 * @folder - Folder where the files will be saved
 * @maxSizeInBytes - Max allowed size in bytes
 * @bypassWritingPermissions - Does not validate if the user has permission to write
 * @publicRead - The file can be publicly accessed via the URL without the need for a signed token
 */
export default class Storage {
    static get values() {
      return {
        leadAttachment: {
          id: "leadAttachment",
          folder: "tenant/:tenantId/settings/resume",
          maxSizeInBytes: 10 * 1024 * 1024,
          publicRead: true,
          attachmentType:"resume"
        },
      };
    }
  }
   