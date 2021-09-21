import express from 'express'
import routes from './routes'
import helmet from 'helmet'

const app = express()

app.use(helmet());

app.use(express.json())

app.use(routes)

app.listen(process.env.PORT || 3333, ()=>{
  console.log('Servidor iniciado')
})
