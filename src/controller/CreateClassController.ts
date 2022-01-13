import { Request, Response } from "express";
import { CreateClassServices } from "../services/CreateClassServices";



class CreateClassController {
  async handle(request: Request , response: Response){
    const {authorId , name , description , video , date_init , date_end } = request.body
    const classes = {
      authorId,
      name,
      description,
      video,
      date_init,
      date_end
    }

    if(date_end < date_init){
      return response.json('Date is invalid')
    }
    try{
      const services = new CreateClassServices()

      const result = await services.execute({classes})
      return response.json(result)

    }catch(err){
      return response.json("class not create")
    }
   
    
 


  } 
}

export {CreateClassController}