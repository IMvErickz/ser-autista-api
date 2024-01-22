import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function DeleteNews(app: FastifyInstance) {
    app.delete('/news/:id', async (req, res) => {

        const newsSchema = z.object({
            id: z.string(),
        })

        const { id } = newsSchema.parse(req.params)

        await prisma.news.delete({
            where: {
                id
            }
        })

        return res.status(201).send('Success')
    })
}