# Teste dev projeto 

---description for application--

  funcionalidades *

 - um usuário vai poder criar salas de aulas e deletar essa sala que ele possui e podera comentar nas outras salas 
 - os outros  usuários poderam comentar dentro da sala 
 
  sobre*

  -no login vai ser gerado um token_access, para acessar outras rotas 
  -pegar os últimos comentários 
  -pegar o dia que foi feito esse comentário  
  - pegar os três últimos comentários   


*rotas*


/*Adicional*/
create_user{
  criar usuario 
  data:{
    id,
    name,
    email,
    
  }
}
/*Adicional*/


users{
  id
  name
  email
  password
}



Classes{
  id,
  authorId,
  name ,
  video,
  description,
  data_init,
  data_end,
  data_created,
  data_updated,
  total_comments
}

Comments{
  id_class,
  authorId,
  comment,
  date_created,
}