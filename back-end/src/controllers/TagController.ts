import { Request, Response } from 'express';

import CreateTagService from '../services/tag/CreateTagService';
import UpdateTagService from '../services/tag/UpdateTagService';
import DeleteTagService from '../services/tag/DeleteTagService';
import ListTagService from '../services/tag/ListTagService';
import { getRepository } from 'typeorm';
import Tag from '../models/Tag';

class TagController {
  async create(request: Request, response: Response) {
    try {
      const { name } = request.body;

      const tagRepository = getRepository(Tag);

      const tag = await new CreateTagService(tagRepository).execute({
        name,
      });

      return response.json(tag);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { name } = request.body;
      const { id } = request.params;

      const tagRepository = getRepository(Tag);

      const tagUpdate = await new UpdateTagService(tagRepository).execute({
        name,
        id,
      });

      return response.json(tagUpdate);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const tagRepository = getRepository(Tag);

      const tagDelete = await new DeleteTagService(tagRepository).execute({
        id,
      });

      return response.json(tagDelete);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }

  async list(request: Request, response: Response) {
    try {

      const tagRepository = getRepository(Tag);

      const tags = await new ListTagService(tagRepository).execute();

      return response.json(tags);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }
}

export default TagController;
