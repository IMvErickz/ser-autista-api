import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";

export async function GetProfessional(app: FastifyInstance) {
    app.get('/professional', async () => {
        const professional = await prisma.professional.findMany()

        return { professional }
    })
}