import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function GetAnswer(app: FastifyInstance) {
    app.get('/answer/:id', async (req) => {
        const doubtId = z.object({
            id: z.string()
        })

        const { id } = doubtId.parse(req.params)

        const answer = await prisma.answer.findMany({
            where: {
                doubt: {
                    id
                }
            }
        })

        return { answer }
    })
}