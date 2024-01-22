import Fastify from 'fastify'
import Cors from '@fastify/cors'
import { GetAllNews } from './routes/News/getAllNews'
import { CreateNews } from './routes/News/createNews'
import { GetNewsById } from './routes/News/getNewsById'
import { UpdateNews } from './routes/News/updateNews'
import { DeleteNews } from './routes/News/deleteNews'

async function Main() {
    const app = Fastify({
        logger: true
    })

    await app.register(Cors, {
        origin: true
    })

    await app.register(GetAllNews)
    await app.register(GetNewsById)
    await app.register(CreateNews)
    await app.register(UpdateNews)
    await app.register(DeleteNews)

    await app.listen({
        port: 3333
    })
}

Main()