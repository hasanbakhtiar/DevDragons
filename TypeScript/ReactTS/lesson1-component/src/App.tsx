import React, { useState } from "react";
import List from "./components/List";

const App = () => {
  const [info, setInfo] = useState<boolean>(false);

  return (
    <div>
      <List sendinfo={info} />
      <button onClick={()=>{setInfo(true)}}>login</button>
    </div>
  );
};

export default App;
