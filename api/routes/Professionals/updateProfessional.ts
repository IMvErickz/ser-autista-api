import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function UpdateProfessional(app: FastifyInstance) {
    app.put('/professional/:id', async (req, res) => {
        const ProfessionalSchema = z.object({
            name: z.string(),
            number: z.string(),
            email: z.string().email().optional(),
            address: z.string().optional(),
            imageUrl: z.string(),
            specialty: z.string(),
            description: z.string()
        })

        const professionalId = z.object({
            id: z.string()
        })

        const { name, number, address, email, imageUrl, specialty, description } = ProfessionalSchema.parse(req.body)

        const { id } = professionalId.parse(req.params)

        if (email) {
            await prisma.professional.update({
                where: {
                    id: id
                },
                data: {
                    name,
                    number,
                    email,
                    imageUrl,
                    specialty,
                    description,
                }
            })

            return res.status(201).send()

        } else if (address) {
            await prisma.professional.update({
                where: {
                    id: id
                },
                data: {
                    name,
                    number,
                    address,
                    imageUrl,
                    specialty,
                    description
                }
            })

            return res.status(201).send()

        } else {
            await prisma.professional.update({
                where: {
                    id: id
                },
                data: {
                    name,
                    number,
                    address,
                    email,
                    imageUrl,
                    specialty,
                    description
                }
            })

            return res.status(201).send()
        }
    })
}