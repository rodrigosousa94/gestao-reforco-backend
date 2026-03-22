import { Request, Response } from "express";
import { UpdateShiftService } from "../../services/shift/UpdateShiftService";

class UpdateShiftController {
    async handle(req: Request, res: Response){
        const userId = req.userId;
        const { id, name, startTime, endTime } = req.body;

        const updateShiftService = new UpdateShiftService();
        const updateShift =  await updateShiftService.execute({ userId, id, name, startTime, endTime });
        return res.json(updateShift)
    }
}

export { UpdateShiftController };