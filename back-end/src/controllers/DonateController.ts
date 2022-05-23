import { Request, Response } from 'express';

import CreateDonateService from '../services/donate/CreateDonateService';
import UpdateDonateService from '../services/donate/UpdateDonateService';
import DeleteDonateService from '../services/donate/DeleteDonateService';
import ListDonateService from '../services/donate/ListDonateService';

class DonateController {
  async create(request: Request, response: Response) {
    try {
      const { title, description, tag_id } = request.body;
      const { id: user_id } = request.user;

      const donate = await new CreateDonateService().execute({
        title,
        description,
        user_id,
        tag_id,
      });

      return response.json(donate);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { title, description, tag_id } = request.body;
      const { id } = request.params;

      const donateUpdate = await new UpdateDonateService().execute({
        title,
        description,
        id,
        tag_id,
      });

      return response.json(donateUpdate);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const donateDelete = await new DeleteDonateService().execute({
        id,
      });

      return response.json(donateDelete);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }

  async list(request: Request, response: Response) {
    try {
      const { id: user_id } = request.user;
      const donates = await new ListDonateService().execute(user_id);

      return response.json(donates);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }
}

export default DonateController;
