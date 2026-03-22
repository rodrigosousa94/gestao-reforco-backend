import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthUserRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthUserRequest){
        if(!email){
            throw new Error("Email incorrect")
        }
        const user = await prismaClient.user.findFirst({
            where: {
                email
            }
        })

        if(!user) {
            throw new Error("User or password incorrect")
        }

        const passwordMatch = await compare(password, user?.passwordHash)

        if(!passwordMatch){
            throw new Error("User or password incorrect")
        }

        const token = sign(
            {
                name: user.id,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: "30d"
            }
        )

        return {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            token
        };
    }
}

export { AuthUserService }