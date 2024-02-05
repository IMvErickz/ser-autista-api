import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function CreateAnswer(app: FastifyInstance) {
    app.post('/answer/:id', async (req, res) => {
        const answertSchema = z.object({
            author: z.string(),
            content: z.string()
        })

        const doubtSchema = z.object({
            id: z.string()
        })

        const { author, content } = answertSchema.parse(req.body)
        const { id } = doubtSchema.parse(req.body)

        await prisma.answer.create({
            data: {
                author,
                content,
                doubt: {
                    connect: {
                        id
                    }
                }
            }
        })

        res.status(201).send()
    })
}