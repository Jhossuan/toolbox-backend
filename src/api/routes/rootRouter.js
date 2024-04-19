import express from 'express'
import FileRouter from './fileRouter.js'

const rootRouter = express.Router();

rootRouter.use('/files', FileRouter)

export default rootRouter;