import prismaClient from '../../prisma';

interface CreatePriceRequest {
    userId: string;
    schoolYear: number;
    monthlyPrice: number;
}

class CreatePriceService {
    async execute({ userId, schoolYear, monthlyPrice }: CreatePriceRequest) {
        if(!schoolYear || !monthlyPrice) {
            throw new Error("Insert all data")
        }

        const alreadyPrice = await prismaClient.schoolYearPrice.findFirst({
            where: {
                userId,
                schoolYear,
                monthlyPrice
            }
        })

        if(alreadyPrice) {
            throw new Error("Price already exist")
        }

        const newPrice = await prismaClient.schoolYearPrice.create({
            data: {
                userId,
                schoolYear,
                monthlyPrice
            },
            select: {
                userId: true,
                schoolYear: true,
                monthlyPrice: true
            }
        })

        return newPrice;
    }
}

export { CreatePriceService }