import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
    async handle(req: Request, res: Response){
        const userId = req.userId;

        const detailService = new DetailUserService();
        const details = await detailService.execute(userId);
        return res.json(details);
    }
}

export { DetailUserController }