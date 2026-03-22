import prismaClient from '../../prisma';

interface UpdateShiftRequest {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
    userId: string;
}

class UpdateShiftService {
    async execute({ id, name, startTime, endTime, userId }: UpdateShiftRequest) {
        if(!name ||  !startTime || !endTime) {
            throw new Error("All data is required")
        }

        const alreadyShift = await prismaClient.shift.findFirst({
            where: {
                id,
                userId
            }
        })

        if(!alreadyShift){
            throw new Error("Shift does not exists")
        }


        const updateShift = await prismaClient.shift.update({
            where: {
                id,
                userId
            },
            data : {
                name,
                startTime,
                endTime,
            },
            select : {
                name: true,
                startTime: true,
                endTime: true
            }
        })

        return updateShift
    }
}

export { UpdateShiftService }