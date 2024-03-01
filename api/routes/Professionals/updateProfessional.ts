import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function UpdateProfessional(app: FastifyInstance) {
    app.put('/professional/:id', async (req, res) => {
        const ProfessionalSchema = z.object({
            name: z.string(),
            number: z.string(),
            email: z.string().nullable(),
            address: z.string().nullable(),
            specialty: z.string(),
            description: z.string()
        })

        const professionalId = z.object({
            id: z.string()
        })

        const { name, number, address, email, specialty, description } = ProfessionalSchema.parse(req.body)

        const { id } = professionalId.parse(req.params)

        await prisma.professional.update({
            where: {
                id: id
            },
            data: {
                name,
                number,
                address,
                email,
                specialty,
                description
            }
        })

        return res.send(204).send()

    })
}