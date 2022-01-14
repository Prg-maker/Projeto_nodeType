import { Request, Response } from "express";
import { UpdateClassServices } from "../services/UpdateClassServices";



class UpdateClassController {
  async handle(request: Request , response: Response){
    const {id ,  name , video , description  } = request.body

    const date  = {
      id ,
      name ,
      video,
      description
    }


    try{
      const services = new UpdateClassServices()

      const result = await services.execute({date})
  
      
      return response.json(result)
    }catch(err){
      return "class not exits"
    }
   


  }
}

export {UpdateClassController}
