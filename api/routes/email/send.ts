import { FastifyInstance } from "fastify";
import { resend } from "../../lib/resend";
import { z } from "zod";

export async function SendEmail(app: FastifyInstance) {
    app.post('/send', async (req, res) => {
        const emailSchema = z.object({
            question: z.string(),
            author: z.string()
        })

        const { author, question } = emailSchema.parse(req.body)

        await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["soulclinicterapia@gmail.com"],
            subject: "hello world",
            html: `
            <div style="display = flex; flex-direction= column; justify-content= center; align-items: center">
            <h2>Me chamo ${author}</h2>
            <p style="font-size: 20px"><strong>Minha dúvida é:</strong> ${question}</p>
        </div>
            `,
        });

        return res.status(200).send()
    })
}

