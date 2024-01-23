import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function DeleteComment(app: FastifyInstance) {
    app.delete('/comment/:id', async (req, res) => {

        const commentSchema = z.object({
            id: z.string(),
        })

        const { id } = commentSchema.parse(req.params)

        await prisma.comments.delete({
            where: {
                id
            }
        })

        return res.status(204).send()
    })
}