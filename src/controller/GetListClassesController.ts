import { Request, Response } from "express";
import { GetListClassesServices } from "../services/GetListClassesServices";



class GetListClassesController {
  async handle(request: Request , response: Response){
  
    const services = new GetListClassesServices()

    const result = await services.execute()

    return response.json(result)

  } 
}

export {GetListClassesController}