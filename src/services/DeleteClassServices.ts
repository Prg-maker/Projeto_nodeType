import { prismaClient } from "../prisma"



class DeleteClassServices{
  async execute(id: string){
    const deleteClass = await prismaClient.classes.delete({
      where:{
        id: id
      }
    }) 



    return deleteClass
  } 
}

export {DeleteClassServices}