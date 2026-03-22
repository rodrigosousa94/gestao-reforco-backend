import prismaClient from '../../prisma';

interface ShiftRequest {
    name: string;
    startTime: string;
    endTime: string;
    userId: string;
}

class CreateShiftService {
    async execute({ name, startTime, endTime, userId }: ShiftRequest) {
        if(!name || !startTime || !endTime) {
            throw new Error("Insert all data");
        }

        const shiftAlready = await prismaClient.shift.findFirst({
            where: {
                name,
                userId
            }
        })

        if(shiftAlready){
            throw new Error("Shift has exists");
        }

        const newShift = await prismaClient.shift.create({
            data: {
                name,
                startTime,
                endTime,
                userId
            }
        })

        return newShift;
    }
}

export { CreateShiftService }