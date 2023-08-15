export const addMovie = ({image,title,price,rate})=>({
    type: "ADD_MOVIE",
    movie:{
      id: crypto.randomUUID(),
      image,
      title,
      price,
      rate,
    }
  })

  export const editMovie =(id,update)=>({
    type:"EDIT_MOVIE",
    id,
    update
  })
  
  
  export const deleteMovie =({id})=>({
    type:"REMOVE_MOVIE",
    myid:id
  })