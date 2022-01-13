import { Request, Response } from "express";
import { ListCommenterServices } from "../services/ListCommenterServices";



class ListCommenterController{
  async handle(request:  Request , response: Response){
    const {id} = request.body

    try{
      const services = new ListCommenterServices()

      const result = await services.execute(id)
  
      return response.json(result)
    }catch(err){
      return response.json('class not exits')
    }
   
  }
}

export {ListCommenterController}