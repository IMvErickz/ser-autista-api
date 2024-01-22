import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function UpdateNews(app: FastifyInstance) {
    app.put('/news/:id', async (req, res) => {

        const newsSchema = z.object({
            id: z.string(),
            title: z.string(),
            content: z.string()
        })

        const { id } = newsSchema.parse(req.params)
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