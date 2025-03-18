import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type User = {
    name: string,
    email: string
}

export type SelectedUser = User;

export async function getUsers(
    search: string,
    offset: number): Promise<User[]>{
        try {
            const users = await prisma.user.findMany({
                where: {
                    OR: [
                        { name: { contains: search, mode: 'insensitive' } },
                        { email: { contains: search, mode: 'insensitive' } }
                    ]
                },
                skip: offset,
                take: 10
            });
            return users;
        } catch (error) {
            console.error(error);
            return [];
        }
}