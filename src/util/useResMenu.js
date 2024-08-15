import { useState } from "react";
import RestroCards from "../componenets/RestroCards";
import MENU_URL from "./MENU_URL";

const RestMenu = ({ resId }) => {
  // Directly access the data
  const [resM,setM] = useState(MENU_URL);
  console.log(resM.info)

  // Filter data based on resId if needed
//   const filteredData = resM.filter((item) => item.info.id === parseInt(resId));

  return (
    <div className="flex flex-wrap justify-center">
      {resM.map((res) => (
        // console.log(res)
        <RestroCards {...res.info} />
      ))}
    </div>
  );
};

export default RestMenu;
