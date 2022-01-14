import {prismaClient} from '../prisma'
import  {sign} from 'jsonwebtoken'

interface Props {
  user:{
    nameUser:string,
    emailUser: string,
    passwordUser: string 
  }
}


class LoginUserServices{
  async execute({user}:Props){
    const {emailUser , nameUser , passwordUser} = user

    const verifyUser = await prismaClient.user.findFirst({
      where:{
        name:nameUser,
        email:emailUser,
        password:passwordUser
      }
    })

    if(!verifyUser){
      return "User not exist"
    }

    const token = sign({
      user:{
        id: verifyUser.id,
        name: verifyUser.name,
        email: verifyUser.email,
        password:verifyUser.password
      }
    }, 
      'a98e655b17c7e481ea7ce4a72e28d86b',
      {
        subject: verifyUser.id,
        expiresIn: "1d"
      }
    ) 


    return {token , verifyUser}

  }
}

export {LoginUserServices}