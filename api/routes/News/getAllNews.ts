import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";

export async function GetAllNews(app: FastifyInstance) {
    app.get('/news', async () => {
        const news = await prisma.news.findMany()

        return { news }
    })
}