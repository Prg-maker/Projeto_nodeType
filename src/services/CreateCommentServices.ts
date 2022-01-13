import { prismaClient } from "../prisma"

interface Props {
  createMessageUser:{
    message: string,
    userId : string,
    classesId: string
  }

}


class CreateCommentServices{
  async execute({createMessageUser }: Props){



 

    try{
      const date = await prismaClient.classes.findFirst({
        where:{
          id: createMessageUser.classesId
        }
      })
      const messageCreated = await prismaClient.comments.create({
        data:{
          userId: createMessageUser.userId,
          classesId: createMessageUser.classesId,
          comment: createMessageUser.message,
          date_created: date?.data_created
        }
      })

      const total = await prismaClient.comments.findMany({
        where:{
          classesId:createMessageUser.classesId
        }
      })


      const response = await prismaClient.classes.update({
        where:{
          id: createMessageUser.classesId
        },
        data:{
          total_comments: total.length
        }
      })
      return messageCreated

    }catch(err){
      return "Class not exits"
    }

   








  }
}

export {CreateCommentServices}