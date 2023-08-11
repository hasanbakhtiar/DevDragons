export const addMovie = ({img,infoTitle,infoPrice,infoRate})=>({
    type: "ADD_MOVIE",
    movie:{
      id: 4,
      image: img,
      title: infoTitle,
      price: infoPrice,
      rate: infoRate,
    }
  })