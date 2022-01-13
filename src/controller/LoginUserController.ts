import { Request, Response } from "express";
import { LoginUserServices } from "../services/LoginUserServices";



class LoginUserController{
  async handle(request: Request ,response: Response){
    const {name , email , password} = request.body

    const user={
      nameUser:name,
      emailUser: email,
      passwordUser:  password
    }

    const services = new LoginUserServices()



    const result = await services.execute({user})

    return response.json(result)

  }
}

export {LoginUserController}