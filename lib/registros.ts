import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Registro = {
    nombre: string;
    telefono: string;
    correo: string | null;
    placa: string;
    fechaRegistro: Date | null;
}

export type SelectRegistro = Registro;

export async function getRegistros(
    search: string,
    offset: number
):Promise<{
    registros: Registro[],
    newOffset: number | null,
    totalRegistros: number
}> {
    try {
        const registros = await prisma.registro.findMany({
            where: {
                OR: [
                    { nombre: { contains: search, mode: 'insensitive' } },
                    { correo: { contains: search, mode: 'insensitive' } },
                    { placa: { contains: search, mode: 'insensitive' } }
                ]
            },
            skip: offset,
            take: 10
        });

        if (offset == null) {
            return {registros: [], newOffset: null, totalRegistros: 0}
        }
        const totalRegistros = await prisma.registro.count();
        let newOffset = registros.length >= 5 ? offset + 5 : null;

        return {
            registros: registros,
            newOffset,
            totalRegistros: totalRegistros
        }
    } catch (error) {
        console.error(error);
        return {registros: [], newOffset: null, totalRegistros: 0}
    }
}