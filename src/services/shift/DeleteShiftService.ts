import prismaClient from '../../prisma';

interface DeleteShiftRequest {
    id: string;
    userId: string;
}

class DeleteShiftService {
    async execute({id, userId} : DeleteShiftRequest) {
        const alreadyShift = await prismaClient.shift.findFirst({
            where: {
                id,
                userId
            }
        })

        if(!alreadyShift){
            throw new Error("Shoft does not exists")
        }

        await prismaClient.shift.delete({
            where:{
                id,
                userId
            }
        })

        return { success: true }
    }
}

export { DeleteShiftService }