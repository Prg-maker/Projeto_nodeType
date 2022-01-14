import { prismaClient } from "../prisma"



class DeleteClassServices{
  async execute(id: string){


    const deleteMessage = await prismaClient.comments.deleteMany({
      where:{
        classesId: id
      }
    })
    
    const deleteClass = await prismaClient.classes.delete({
      where:{
        id: id
      },
    })

   



    return deleteClass
  } 
}

export {DeleteClassServices}