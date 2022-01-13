import { prismaClient } from "../prisma"

interface Props{
  classes:{
    authorId: string
    name: string
    description: string
    video: string,
    date_init: Date
    date_end: Date
  }
}


class CreateClassServices{
  async execute({classes}: Props){

    let data = {
      dataEnd: new Date(classes.date_init),
      dateInit: new Date(classes.date_init)
    }
    

    //const total = await prismaClient.comments.findMany()
    
    const classesUser = await prismaClient.classes.create({
      data:{
        authorId: classes.authorId,
        name: classes.name,
        description: classes.description,
        video: classes.video,
        data_init: data.dateInit,
        data_end: data.dateInit,
        total_comments: 0
      }
    })


    return classesUser
  }
}

export {CreateClassServices}