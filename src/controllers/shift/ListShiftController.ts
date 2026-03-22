import { Request, Response } from "express";
import { ListShiftService } from "../../services/shift/ListShiftService";

class ListShiftController {
    async handle(req: Request, res: Response) {
        const userId = req.userId;

        const listShiftService = new ListShiftService();
        const list = await listShiftService.execute({ userId });
        return res.json(list);
    }
}

export { ListShiftController }