import { prismaClient } from "../prisma"



class GetOneClassInfoServices{
  async execute(id:string){
    const info = await prismaClient.classes.findFirst({
      where:{
        id
      },
    })

    const messages = await prismaClient.comments.findMany({
      take:3,
    })


    
    return {info , messages}
  }
}

export {GetOneClassInfoServices}