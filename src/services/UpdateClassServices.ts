import { prismaClient } from "../prisma"

interface Props{
  date:{
    id: string
    name: string,
    video: string,
    description: string,
  
  }
}

class UpdateClassServices{  
  async execute({date} :Props){
    const updateClass = await prismaClient.classes.update({
      where:{
        id: date.id
      },
      data:{
        name: date.name,
        description: date.description,
        video: date.video,
        date_updated: new Date
      }
    })

    return updateClass
  }
}

export {UpdateClassServices}