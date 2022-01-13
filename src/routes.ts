import {Router} from 'express'


import {LoginUserController} from './controller/LoginUserController'
import {CreateClassController} from './controller/CreateClassController'
import {CreateCommentController} from './controller/CreateCommentController'



import {ListCommenterController} from './controller/ListCommenterController'



import {DeleteClassController} from './controller/DeleteClassController'


const router = Router()


router.get('/classes/comments' , new ListCommenterController().handle)




router.post('/users' , new LoginUserController().handle)
router.post('/classes' , new CreateClassController().handle)
router.post('/classes/comments' , new CreateCommentController().handle)


router.delete('/classes/:id' , new DeleteClassController().handle)


export {router}