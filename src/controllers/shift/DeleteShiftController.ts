import { Request, Response } from "express";
import { DeleteShiftService } from "../../services/shift/DeleteShiftService";

class DeleteShiftController {
    async handle(req: Request, res: Response){
        const userId = req.userId;
        const { id } = req.body;

        const deleteShiftService = new DeleteShiftService();
        const deleteShift = await deleteShiftService.execute({ id, userId }) 
        return res.json(deleteShift)
    }
}

export { DeleteShiftController }