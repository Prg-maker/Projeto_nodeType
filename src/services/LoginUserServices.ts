import {prismaClient} from '../prisma'

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
    console.log(emailUser)

    const verifyUser = await prismaClient.user.findFirst({
      where:{
        name:nameUser,
        email:emailUser,
        password:passwordUser
      }
    })

    if(!verifyUser){
      return "User not exist"
    }else{
      const user = await prismaClient.user.create({
        data:{
          name: nameUser,
          email: emailUser,
          password: passwordUser
        }
      })
    }


    return verifyUser

  }
}

export {LoginUserServices}