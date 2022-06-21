import { Request, Response } from 'express';
import CreateFileService from '../services/files/CreateFileService';
import DeleteFileService from '../services/files/DeleteFileService';
import ListFileService from '../services/files/ListFileService';
import UpdateFileService from '../services/files/UpdateFileService';

class FileController {
    async create(request: Request, response: Response) {
        try {
            let fileData = request.files;

            if (!fileData) {
                return response.status(400).json({ error: "Send alist one file" });
            }

            const files = fileData.data;

            if (Array.isArray(files) || !files) {
                return response.status(400).json({ error: "Send alist one file" });
            }


            const name = files.name;
            const data = files.data;
            const mimeType = files.mimetype;

            const File = await new CreateFileService().execute({ name , data, mimeType});
            return response.json(File);

        } catch (error) {
            return response.status(400).json({ error: (error as Error).message });
        }
    }

    async update(request: Request, response: Response) {
        try {
            const { id } = request.params;
            let fileData = request.files;

            if (!fileData) {
                return response.status(400).json({ error: "Send alist one file" });
            }

            const files = fileData.data;

            if (Array.isArray(files)) {
                return response.status(400).json({ error: "Send just one file" });
            }

            const name = files.name;
            const data = files.data;
            const mimeType = files.mimetype;

            const FileUpdated = await new UpdateFileService().execute({
                id,
                name,
                data,
                mimeType
            });

            return response.json(FileUpdated);
        } catch (error) {
            return
        }
    }

    async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const FileDeleted = await new DeleteFileService().execute({
                id,
            });

            return response.json(FileDeleted);
        } catch (error) {
            return response.status(400).json({ error: (error as Error).message });
        }
    }

    async listById(request: Request, response: Response) {

        try {
            const { id } = request.params;
            const File = await new ListFileService().execute({
                id,
            });

            return response.json(File);
        } catch (error) {
            return response.status(400).json({ error: (error as Error).message });
        }
    }
}

export default FileController;
