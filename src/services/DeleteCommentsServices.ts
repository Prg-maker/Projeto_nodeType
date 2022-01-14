import { prismaClient } from "../prisma"



class DeleteCommentsServices{
  async execute(id: string){
    const deleteCommenter = await prismaClient.comments.delete({
      where:{
        id
      }
    }) 



    return deleteCommenter
  }
}

export {DeleteCommentsServices}