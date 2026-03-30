import { Request, Response } from "express";
import { DeletePriceService } from "../../services/price/DeletePriceService";

class DeletePriceController {
    async handle(req: Request, res: Response){
        const userId = req.userId;
        const {id} = req.body;

        const deletePriceService = new DeletePriceService();
        const deletePrice = deletePriceService.execute({ userId, id })
        return res.json(deletePrice)
    }
}

export { DeletePriceController }