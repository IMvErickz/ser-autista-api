import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";

export async function GetAllNews(app: FastifyInstance) {
    app.get('/news', async () => {
        const news = await prisma.news.findMany()

        const response = news.map(n => {
            return {
                id: n.id,
                title: n.title,
                imgUrl: n.imgUrl,
                excert: n.content.substring(0, 300).concat('...')
            }
        })

        return { response }
    })
}