import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";

export async function GetAllNews(app: FastifyInstance) {
    app.get('/news', async () => {
        const news = await prisma.news.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })

        const response = news.map(n => {
            return {
                id: n.id,
                title: n.title,
                titleExcert: n.content.substring(0, 15).concat('...'),
                imgUrl: n.imgUrl,
                excert: n.content.substring(0, 300).concat('...')
            }
        })

        return { response }
    })
}