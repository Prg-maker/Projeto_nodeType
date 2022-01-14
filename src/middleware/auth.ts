import {Request, Response , NextFunction} from 'express'
import {verify} from 'jsonwebtoken'


interface IPayload {
  sub: string
}


export function ensureAuthenticate(
  request: Request,
  response: Response,
  next : NextFunction 
){
  
  const authToken = request.headers.authorization

  if(!authToken ){
    console.log(authToken)
    return response.status(401).json({
      errorCode:"token.invalid"
    })
  }


  const [, token]  = authToken.split("")
    
  try{
    const {sub} = verify(token , 'a98e655b17c7e481ea7ce4a72e28d86b') as IPayload

    return next()
  }catch(err){
    return  response.status(401).json({errorCode: "token.expired"})

  }

}