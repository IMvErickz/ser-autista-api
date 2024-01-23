import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function GetComments(app: FastifyInstance) {
    app.get('/comment/:id', async (req) => {

        const commentSchema = z.object({
            id: z.string(),
        })

        const { id } = commentSchema.parse(req.params)

        const comments = await prisma.comments.findMany({
            where: {
                News: {
                    id
                }
            }
        })

        return { comments }
    })
}