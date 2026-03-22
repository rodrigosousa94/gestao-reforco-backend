import { Request, Response } from "express";
import { CreateShiftService } from "../../services/shift/CreateShiftService";

class CreateShiftController {
    async handle(req: Request, res: Response) {
        const userId = req.userId;
        const { name, startTime, endTime } = req.body;

        const createShiftServce = new CreateShiftService();
        const newShift = await createShiftServce.execute({ name, startTime, endTime, userId })
        return res.json(newShift)
    }
}

export { CreateShiftController }