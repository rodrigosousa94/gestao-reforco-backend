import { Request, Response } from "express";
import { ListStudentByIdService } from "../../services/student/ListStudentByIdService";
import ca from "zod/v4/locales/ca.js";

class ListStudentByIdController{
    async handle(req: Request, res: Response){
        try{
            const userId = req.userId;
            const { id } = req.body;

            const listStudentService = new ListStudentByIdService();
            const student = await listStudentService.execute({ userId, id });
            return res.json(student);
        }catch(err){
            console.log(err);
        }
    }
}

export { ListStudentByIdController }