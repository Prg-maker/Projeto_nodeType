import {Router} from 'express'

import { ensureAuthenticate } from './middleware/auth'

import {LoginUserController} from './controller/LoginUserController'
import {CreateClassController} from './controller/CreateClassController'
import {CreateCommentController} from './controller/CreateCommentController'



import {ListCommenterController} from './controller/ListCommenterController'
import {GetListClassesController} from './controller/GetListClassesController'
import {GetOneClassInfoController} from './controller/GetOneClassInfoController'



import {DeleteClassController} from './controller/DeleteClassController'
import {DeleteCommentsController } from './controller/DeleteCommentsController'


import { UpdateClassController} from './controller/UpdateClassController'





const router = Router()


router.get('/classes/comments' ,ensureAuthenticate , new ListCommenterController().handle)
router.get('/classes' , ensureAuthenticate , new GetListClassesController().handle)
router.get('/classes/:id' , ensureAuthenticate, new GetOneClassInfoController().handle)



router.post('/users' , new LoginUserController().handle)
router.post('/classes' , ensureAuthenticate , new CreateClassController().handle)
router.post('/classes/comments' , ensureAuthenticate , new CreateCommentController().handle)


router.delete('/classes/:id' , ensureAuthenticate ,new DeleteClassController().handle)
router.delete('/classes/comments/:id' ,ensureAuthenticate , new DeleteCommentsController().handle)


router.put('/classes' , ensureAuthenticate , new UpdateClassController().handle)



export {router}