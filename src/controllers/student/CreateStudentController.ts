import { Request, Response } from "express";
import { CreateStudentService } from "../../services/student/CreateStudentService";

class CreateStudentController {
    async handle(req: Request, res: Response) {
        const userId = req.userId;
        const { shiftId, priceId, name, schedule, customPrice } = req.body;

        const createStudentService = new CreateStudentService();
        const create = await createStudentService.execute({userId, shiftId, priceId, name, schedule, customPrice});
        return res.json(create)
    }
}

export { CreateStudentController }