import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function CreateDoubt(app: FastifyInstance) {
    app.post('/doubt', async (req, res) => {
        const doubtSchema = z.object({
            author: z.string(),
            question: z.string()
        })

        const { author, question } = doubtSchema.parse(req.body)

        await prisma.doubt.create({
            data: {
                author,
                question
            }
        })

        res.status(201).send()
    })
}