import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "../../lib/cloudfare";
import { imgbox } from "imgbox-js";

export async function GetFile(app: FastifyInstance) {
    app.get('/upload/:id', async (req) => {
        const uploadSchema = z.object({
            id: z.string()
        })

        const { id } = uploadSchema.parse(req.params)

        const file = await prisma.images.findUniqueOrThrow({
            where: {
                id: id
            }
        })


        const signedUrlDownload = await getSignedUrl(
            r2,
            new GetObjectCommand({
                Bucket: 'ser-autista',
                Key: file.key,
            })
        )

        const response = imgbox(signedUrlDownload)

        return response

    })
}