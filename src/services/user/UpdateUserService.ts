import prismaClient from '../../prisma';

interface UpdateRequestUser {
    id: string;
    name: string;
    email: string;
}

class UpdateUserService {
    async execute({ id, name, email }: UpdateRequestUser){

        const verifyUser = await prismaClient.user.findFirst({
            where: {
                id
            }
        })

        if(!verifyUser){
            throw new Error("User does not exists")
        }

        const updateUser = await prismaClient.user.update({
            where: {
                id
            },
            data: {
                name,
                email
            }
        })

        return ("User is updated")
    }
}

export { UpdateUserService }