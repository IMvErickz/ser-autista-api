import Fastify from 'fastify'
import Cors from '@fastify/cors'
import { GetAllNews } from './routes/News/getAllNews'
import { CreateNews } from './routes/News/createNews'
import { GetNewsById } from './routes/News/getNewsById'
import { UpdateNews } from './routes/News/updateNews'
import { DeleteNews } from './routes/News/deleteNews'
import { CreateComment } from './routes/Comments/createComment'
import { GetComments } from './routes/Comments/getComments'
import { DeleteComment } from './routes/Comments/deleteComment'

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

    await app.register(CreateComment)
    await app.register(GetComments)
    await app.register(DeleteComment)

    await app.listen({
        port: 3333
    })
}

Main()