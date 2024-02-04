import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function CreateProfessional(app: FastifyInstance) {
    app.post('/professional', async (req, res) => {
        const ProfessionalSchema = z.object({
            name: z.string(),
            number: z.number(),
            email: z.string().email().optional(),
            address: z.string().optional()
        })

        const { name, number, address, email } = ProfessionalSchema.parse(req.body)

        if (email) {
            await prisma.professional.create({
                data: {
                    name,
                    number,
                    email
                }
            })
        } else if (address) {
            await prisma.professional.create({
                data: {
                    name,
                    number,
                    address
                }
            })
        } else {
            await prisma.professional.create({
                data: {
                    name,
                    number,
                    address,
                    email
                }
            })
        }

        return res.status(201).send()
    })
}