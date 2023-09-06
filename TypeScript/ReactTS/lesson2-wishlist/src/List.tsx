import { useWishlist } from "react-use-wishlist";

const products:any[] = [
    {
      id: 1,
      name: "Malm",
      price: 9900.1
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500.00,
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500
    },
  ];


const List = () => {
    const { addWishlistItem } = useWishlist();
  return (
    <div>
        {products.map((item:any)=>(
           <div key={item.id}>
            <li>{item.name}{item.price}</li><button onClick={()=>{addWishlistItem(item)}}>add wishlist</button>
           </div>
        ))}
    </div>
  )
}

export default List