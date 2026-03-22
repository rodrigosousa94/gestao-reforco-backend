import prismaClient from '../../prisma'

interface ListShiftsRequest {
    userId: string;
}

class ListShiftService {
    async execute({ userId }: ListShiftsRequest){
        const list = await prismaClient.shift.findMany({
            where: {
                userId
            },
            select: {
                id: true,
                name: true,
                startTime: true,
                endTime: true,
                students: true
            }
        })

        return list
    }
}

export { ListShiftService }