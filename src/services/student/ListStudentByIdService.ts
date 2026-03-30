import prismaClient from '../../prisma';

interface ListStudentByIdRequest {
    userId: string;
    id: string;
}

class ListStudentByIdService {
    async execute({ userId, id }: ListStudentByIdRequest) {
        const student = await prismaClient.student.findFirst({
            where: {
                userId,
                id
            }
        })

        if(!student){
            throw new Error("student does no exist")
        }

        return student
    }
}

export { ListStudentByIdService }