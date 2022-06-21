import { Request, Response } from 'express';
import CreateFileService from '../services/files/CreateFileService';

class FileController {
    async create(request: Request, response: Response) {
        try {
            let fileData = request.file;
            if (!fileData) {
                return response.status(400).json({ error: "Envie um arquivo" });
            }
           

            const user = await new CreateFileService().execute({ fileData });
            return response.json(user);
        } catch (error) {
            return response.status(400).json({ error: (error as Error).message });
        }
    }

    async update(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const { email, password } = request.body;

            const userUpdated = await new UpdateUserService().execute({
                id,
                email,
                password,
            });

            return response.json(userUpdated);
        } catch (error) {
            return
        }
    }

    async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const userDeleted = await new DeleteUserService().execute({
                id,
            });

            return response.json(userDeleted);
        } catch (error) {
            return response.status(400).json({ error: (error as Error).message });
        }
    }

    async listById(request: Request, response: Response) {
        const users = await new ListUserService().execute();
        return response.json(users);
    }
}

export default FileController;
