import MENU_URL from "../util/MENU_URL";
import { useParams } from "react-router-dom";
import useResMenu from "../util/useResMenu";

const Restromenu = () => {
  const { resId } = useParams(); // Destructure to get resId
  const resInfo = useResMenu(resId);
  console.log(resInfo)

  // Handle case where resInfo might be undefined
  if (!resInfo) {
    return <div>Loading...</div>;
  }

  const { name, cuisines, costForTwoMessage } = resInfo;

  return (
    <div className="menu">
      <h1>{name}</h1> {/* Fixed typo here */}
      <ul>
        {/* Placeholder items */}
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
      </ul>
    </div>
  );
};

export default Restromenu;
