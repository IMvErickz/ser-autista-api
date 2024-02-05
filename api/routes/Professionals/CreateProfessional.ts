import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function CreateProfessional(app: FastifyInstance) {
    app.post('/professional', async (req, res) => {
        const ProfessionalSchema = z.object({
            name: z.string(),
            number: z.string(),
            email: z.string().email().optional(),
            address: z.string().optional(),
            imageUrl: z.string()
        })

        const { name, number, address, email, imageUrl } = ProfessionalSchema.parse(req.body)

        if (email) {
            await prisma.professional.create({
                data: {
                    name,
                    number,
                    email,
                    imageUrl
                }
            })

            return res.status(201).send()

        } else if (address) {
            await prisma.professional.create({
                data: {
                    name,
                    number,
                    address,
                    imageUrl
                }
            })

            return res.status(201).send()

        } else {
            await prisma.professional.create({
                data: {
                    name,
                    number,
                    address,
                    email,
                    imageUrl
                }
            })

            return res.status(201).send()

        }

    })
}