import { Request, Response } from "express";
import { ListStudentService } from "../../services/student/ListStudentService";

class ListStudentController {
    async handle(req: Request, res: Response) {
        const userId = req.userId;

        const listStudentService = new ListStudentService();
        const list = await listStudentService.execute({ userId });
        return res.json(list);
    }
}

export { ListStudentController }