import express from 'express'
import {router} from './routes'

import { prismaClient } from './prisma'


const server = express()




server.use(express.json())
server.use(router)

server.listen(3000 , () => {
  console.log('server is running')
})