import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { slug } = req.query;
    if (!slug) {
        return res.status(400).json({ error: 'Slug missing from request' });
    }
    
    const filePath = path.join(process.cwd(), 'public', 'assets', 'files', `${slug}.html`);
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'File not found' });
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    res.status(200).json({ html: fileContent });
}
