import { prismaClient } from "../prisma"



class GetListClassesServices{
  async execute(){
    const classes = await prismaClient.classes.findMany()

    
    /*const message = classes.map(async data => {

      const lastMessage = await prismaClient.comments.findMany({
        where:{
          classesId: data.id
        },
        take: 1
      })

      return {lastMessage}


    })*/


    return {classes }



  }
}

export {GetListClassesServices}