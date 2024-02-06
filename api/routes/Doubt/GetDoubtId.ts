import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function GetDoubtId(app: FastifyInstance) {
    app.get('/doubt/:id', async (req) => {
        const doubtId = z.object({
            id: z.string()
        })

        const { id } = doubtId.parse(req.params)

        const doubt = await prisma.doubt.findUniqueOrThrow({
            where: {
                id
            }
        })

        return { doubt }
    })
}