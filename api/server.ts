import Fastify from 'fastify'
import Cors from '@fastify/cors'
import { GetAllNews } from './routes/News/getAllNews'
import { CreateNews } from './routes/News/createNews'

async function Main() {
    const app = Fastify({
        logger: true
    })

    await app.register(Cors, {
        origin: true
    })

    await app.register(GetAllNews)
    await app.register(CreateNews)

    await app.listen({
        port: 3333
    })
}

Main()