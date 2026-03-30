import { Request, Response } from "express";
import { CreatePriceService } from "../../services/price/CreatePriceService";

class CreatePriceController {
    async handle(req: Request, res: Response) {
        const userId = req.userId;
        const { schoolYear, monthlyPrice } = req.body;

        const createPriceService = new CreatePriceService();
        const newPrice = await createPriceService.execute({ userId, schoolYear, monthlyPrice })
        return res.json(newPrice);
    }
}

export { CreatePriceController }