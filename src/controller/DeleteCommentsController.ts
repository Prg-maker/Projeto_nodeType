import { Request, Response } from "express";
import { DeleteCommentsServices } from "../services/DeleteCommentsServices";



class DeleteCommentsController{
  async handle(request: Request, response: Response){
    const {id} = request.params

    try{
      const services = new DeleteCommentsServices()

      const result = await services.execute(id)
      
      return response.json(`message delete, id: ${id}`)
    }catch(err){
      return  response.json('message no exist or no delete')
    }
    
  
  }
}

export {DeleteCommentsController}