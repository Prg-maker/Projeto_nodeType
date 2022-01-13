import { Request, Response } from "express";
import { CreateCommentServices } from "../services/CreateCommentServices";





class CreateCommentController {
  async handle(request: Request , response: Response){
    const {userId , classesId , message} = request.body


    const createMessageUser  = {
      message,
      userId,
      classesId,
    }


   


    const services = new CreateCommentServices()

    const result = await services.execute({createMessageUser})


    return response.json(result) 

  } 
}

export {CreateCommentController}