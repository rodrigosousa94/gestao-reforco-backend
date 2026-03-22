import prismaClient from "../../prisma";


class DetailUserService {
    async execute(userId: string){
        const userDetail = await prismaClient.user.findFirst({
            where: {
                id: userId
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return userDetail 
    }
}

export { DetailUserService }