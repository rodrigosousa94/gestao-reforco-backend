import prismaClient from '../../prisma';

interface UpdatePriceRequest {
    userId: string;
    id: string;
    schoolYear: number;
    monthlyPrice: number;
}

class UpdatePriceService {
    async execute({ userId, id, schoolYear, monthlyPrice }: UpdatePriceRequest) {
        if(!schoolYear || !monthlyPrice) {
            throw new Error("All data is required")
        }

        const alreadyPrice = await prismaClient.schoolYearPrice.findFirst({
            where: {
                userId,
                id  
            }
        })

        if(!alreadyPrice){
            throw new Error("Price does not exist");
        }

        await prismaClient.schoolYearPrice.update({
            where: {
                id,
                userId
            },
            data: {
                schoolYear,
                monthlyPrice    
            }
        })

        return ({ok: true});
    }
}

export { UpdatePriceService };