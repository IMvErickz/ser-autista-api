import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function CreateNews(app: FastifyInstance) {
    app.post('/news', async (req, res) => {
        const newsSchema = z.object({
            title: z.string(),
            imgUrl: z.string(),
            content: z.string(),
        })

        const { title, imgUrl, content } = newsSchema.parse(req.body)

        await prisma.news.create({
            data: {
                title,
                imgUrl,
                content,
                createdAt: new Date()
            }
        })

        return res.status(201).send('Success')
    })
}