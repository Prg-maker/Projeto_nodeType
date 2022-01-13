import { Request, Response } from "express";
import { DeleteClassServices } from "../services/DeleteClassServices";





class DeleteClassController {
  async handle(request: Request , response: Response){
    const {id} = request.params


    try{
      const services = new DeleteClassServices()

      const result = await services.execute(id)
  
  
      return response.json(`class delete, id: ${id}`) 
    }catch(err){
      return response.json('class not exits')
    }


  } 
}

export {DeleteClassController}