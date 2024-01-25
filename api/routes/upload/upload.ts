import { randomUUID } from "crypto";
import { FastifyInstance } from "fastify";
import { createWriteStream } from "fs";
import { extname, resolve } from "path";
import { pipeline } from "stream";
import { promisify } from "util";
import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "../../lib/cloudfare";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { z } from "zod";
import { prisma } from "../../lib/prisma";
import axios from "axios";

const pump = promisify(pipeline)

export async function Upload(app: FastifyInstance) {
    app.post('/upload', async (req, res) => {

        const uploadSchema = z.object({
            data: z.string(),
            contentType: z.string().regex(/^(image|video)\/[a-zA-Z]+/)
        })

        const { contentType, data } = uploadSchema.parse(req.body)

        const fileKey = randomUUID().concat('-').concat(data)

        const signedUrl = await getSignedUrl(
            r2,
            new PutObjectCommand({
                Bucket: 'ser-autista',
                Key: fileKey,
                ContentType: contentType
            })
        )

        const file = await prisma.images.create({
            data: {
                key: fileKey,
            }
        })


        return { signedUrl, fileId: file.id }

    })


}