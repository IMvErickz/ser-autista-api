import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function GetNewsById(app: FastifyInstance) {
    app.get('/news/:id', async (req, res) => {

        const newsSchema = z.object({
            id: z.string()
        })

        const { id } = newsSchema.parse(req.params)

        const news = await prisma.news.findUniqueOrThrow({
            where: {
                id
            }
        })

        return { news }
    })
}