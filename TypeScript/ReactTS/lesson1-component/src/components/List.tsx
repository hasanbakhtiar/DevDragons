type propType = {
    sendinfo : boolean
}


const List:React.FC<propType> = ({sendinfo}) => {


  return <div>
   {sendinfo ? "Hello Hasan":"no access"}
  </div>;
};

export default List;
