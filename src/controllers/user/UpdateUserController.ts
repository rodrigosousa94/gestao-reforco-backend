import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const id = req.userId;
        const { name, email } = req.body;

        const updateUser = new UpdateUserService();
        const updated = await updateUser.execute({ id, name, email })
        return res.json(updated);
    }
}

export { UpdateUserController }