import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

export async function CreateComment(app: FastifyInstance) {
    app.post('/comment/:id', async (req, res) => {

        const commentSchema = z.object({
            author: z.string(),
            content: z.string()
        })

        const newsSchema = z.object({
            id: z.string()
        })

        const { id } = newsSchema.parse(req.params)
        const { author, content } = commentSchema.parse(req.body)

        await prisma.comments.create({
            data: {
                author,
                content,
                News: {
                    connect: {
                        id
                    }
                }
            }
        })

        return res.status(201).send()
    })
}