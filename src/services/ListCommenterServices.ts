import { prismaClient } from "../prisma"




class ListCommenterServices{
  async execute(id: string ){
    const comments = await prismaClient.comments.findMany({
      where:{
        classesId: id
      }
    })

    if(comments.length == 0 ){
      return "no commenter  "
    }



    return comments
  }
}

export {ListCommenterServices}