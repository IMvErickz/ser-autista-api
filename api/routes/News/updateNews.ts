import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function UpdateNews(app: FastifyInstance) {
    app.put('/news/:id', async (req, res) => {

        const newsSchema = z.object({
            title: z.string(),
            content: z.string()
        })

        const newsId = z.object({
            id: z.string()
        })

        const { id } = newsId.parse(req.params)
        const { title, content } = newsSchema.parse(req.body)

        await prisma.news.update({
            where: {
                id
            },
            data: {
                title,
                content,
                updateAt: new Date()
            }
        })

        return res.status(201).send('Success')
    })
}