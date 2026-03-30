import prismaClient from '../../prisma';

interface CreateStudentRequest {
    userId: string;
    shiftId: string;
    priceId: string;
    name: string;
    schedule: string;
    customPrice?: number;
}

class CreateStudentService {
    async execute({ userId, shiftId, priceId, name, schedule, customPrice }: CreateStudentRequest) {
        if(!name || !schedule) {
        throw new Error("Please insert all data");
        }

        const price = await prismaClient.schoolYearPrice.findFirst({
            where: {
                id: priceId,
                userId
            }
        })

        if (!price) {
            throw new Error("Preço não encontrado")
        }

        const alreadyStudent = await prismaClient.student.findFirst({
            where: {
                userId,
                shiftId,
                name
            }
        })

        if(alreadyStudent){
            throw new Error("User already exist")
        }

        const createStudent = await prismaClient.student.create({
            data: {
                userId,
                shiftId,
                priceId,
                name,
                schoolYear: price.schoolYear,
                schedule,
                customPrice,
                active: true
            },
            include: {
                shift: true,
                price: true
            }
        })

        return createStudent
    }
}

export { CreateStudentService }