import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import rootRouter from './api/routes/rootRouter.js';
import 'dotenv/config'


const app =  express()
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))

app.use('/', rootRouter)

export default app;