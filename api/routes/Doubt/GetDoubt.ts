import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";

export async function GetDoubt(app: FastifyInstance) {
    app.get('/doubt', async () => {
        const doubt = await prisma.doubt.findMany()

        return { doubt }
    })
}