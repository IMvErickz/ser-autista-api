import Fastify from 'fastify'
import Cors from '@fastify/cors'
import multipart from '@fastify/multipart'
import Static from '@fastify/static'
import { GetAllNews } from './routes/News/getAllNews'
import { CreateNews } from './routes/News/createNews'
import { GetNewsById } from './routes/News/getNewsById'
import { UpdateNews } from './routes/News/updateNews'
import { DeleteNews } from './routes/News/deleteNews'
import { CreateComment } from './routes/Comments/createComment'
import { DeleteComment } from './routes/Comments/deleteComment'
import { GetComments } from './routes/Comments/getComments'
import { resolve } from 'path'
import { Upload } from './routes/upload/upload'
import { GetFile } from './routes/upload/getFile'
import { CreateDoubt } from './routes/Doubt/createDoubt'
import { GetDoubt } from './routes/Doubt/GetDoubt'
import { CreateAnswer } from './routes/Doubt/CreateAnswer'
import { GetAnswer } from './routes/Doubt/GetAnswer'
import { CreateProfessional } from './routes/Professionals/CreateProfessional'
import { GetProfessional } from './routes/Professionals/GetProfessional'
import { GetDoubtId } from './routes/Doubt/GetDoubtId'
import { UpdateProfessional } from './routes/Professionals/updateProfessional'


const app = Fastify()

app.register(Cors, {
    origin: true
})

app.register(multipart)

app.register(require('@fastify/static'), {
    root: resolve(__dirname, '../uploads'),
    prefix: '/uploads'
})

app.register(GetAllNews)
app.register(GetNewsById)
app.register(CreateNews)
app.register(UpdateNews)
app.register(DeleteNews)

app.register(CreateComment)
app.register(GetComments)
app.register(DeleteComment)

app.register(Upload)
app.register(GetFile)

app.register(CreateDoubt)
app.register(GetDoubt)
app.register(CreateAnswer)
app.register(GetAnswer)
app.register(GetDoubtId)

app.register(CreateProfessional)
app.register(GetProfessional)
app.register(UpdateProfessional)

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(() => {
    console.log('HTTP Server running')
})

