import prismaClient from '../../prisma';

interface ListStudentRequest {
    userId: string;
}

class ListStudentService {
    async execute({ userId }: ListStudentRequest) {
            const list = await prismaClient.student.findMany({
                where: {
                    userId
                }
            })

            return list
    }
}

export { ListStudentService }