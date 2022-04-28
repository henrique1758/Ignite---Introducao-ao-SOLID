/* eslint-disable prettier/prettier */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable prettier/prettier */
import { Request, Response } from "express";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.headers;
    const user_id = String(id);

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).json(users);
    } catch(err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };

