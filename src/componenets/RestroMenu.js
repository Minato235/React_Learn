import MENU_URL from "../util/MENU_URL";
import { useParams } from "react-router-dom";

const Restromenu = () => {
  const menu = MENU_URL;

  console.log('Menu:', menu);

  // Access the first card to get restaurant info
  const resInfo = menu[0]?.card?.card?.text;
  console.log('Restaurant Info:', resInfo);

  const itemCards = menu[2]?.card?.card?.tabs;
  console.log('Item Cards:', itemCards);

  return (
    <div className="menu">
      <h1>{resInfo[3]}</h1>
      {/* <img>IMAGE</img> */}
      <ul>
        {/* Placeholder items */}
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
      </ul>
      <ul>
        {itemCards ? (
          itemCards.map((item, index) => (
            <li key={index}>{item.title}</li> // Adjust based on actual data
          ))
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default Restromenu;
