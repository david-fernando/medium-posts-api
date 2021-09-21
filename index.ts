import express from 'express'
import routes from './routes'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

const app = express()


app.use(helmet());

app.use(cookieParser())

app.use(express.json())

app.use(routes)

app.listen(process.env.PORT || 3333, ()=>{
  console.log('Servidor iniciado')
})
