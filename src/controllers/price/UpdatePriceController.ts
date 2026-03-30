import { Request, Response } from "express";
import { UpdatePriceService } from "../../services/price/UpdatePriceService";

class UpdatePriceController {
    async handle(req: Request, res: Response) {
        const userId = req.userId;
        const { id, schoolYear, monthlyPrice } = req.body;

        const updatePriceService = new UpdatePriceService();
        const updated = await updatePriceService.execute({ userId, id, schoolYear, monthlyPrice });
        return res.json(updated)
    }
}

export { UpdatePriceController }