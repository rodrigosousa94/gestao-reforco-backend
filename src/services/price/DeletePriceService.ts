import prismaClient from '../../prisma';

interface DeletePriceRequest {
    userId: string;
    id: string;
}

class DeletePriceService {
    async execute({ userId, id }: DeletePriceRequest) {
        const alreadyPrice = await prismaClient.schoolYearPrice.findFirst({
            where: {
                userId,
                id  
            }
        })

        if(!alreadyPrice){
            throw new Error("Price does not exist");
        }

        await prismaClient.schoolYearPrice.delete({
            where: {
                id,
                userId
            }
        })

        return ({ok: true});
    }
}

export { DeletePriceService }