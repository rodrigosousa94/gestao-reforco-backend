import { Request, Response } from "express";
import { ListPriceService } from "../../services/price/ListPriceService";

class ListPriceController {
    async handle(req: Request, res: Response) {
        const userId = req.userId;

        const listPriceService = new ListPriceService();
        const prices = await listPriceService.execute({ userId });
        return res.json(prices);
    }
}

export { ListPriceController }