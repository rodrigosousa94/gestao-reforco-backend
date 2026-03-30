import prismaClient from '../../prisma';

interface ListPriceRequest {
    userId: string;
}

class ListPriceService {
    async execute({ userId }: ListPriceRequest) {
        const prices = await prismaClient.schoolYearPrice.findMany({
            where: {
                userId
            }
        })

        return prices
    }
}

export { ListPriceService }