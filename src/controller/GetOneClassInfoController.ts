import { Request, Response } from "express";
import { GetOneClassInfoServices } from "../services/GetOneClassInfoServices";



class GetOneClassInfoController {
  async handle(request: Request , response: Response){
    const {id} = request.params


    const services = new GetOneClassInfoServices()

    const result = await services.execute(id)

    
    return response.json(result)


  } 
}

export {GetOneClassInfoController}