import {IMG_CDN_URL} from "../util/const"
  const RestroCards = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    lastMileTravelString,
    costForTwo,
    avgRating,
  }) => {
    return (
      <div className="m-7 p-4 w-96 bg-voilet-500 hover:bg-violet-200 rounded-lg w-25 ">
        <img className="w-fit h-48 object-cover rounded-md" src={IMG_CDN_URL + cloudinaryImageId} alt="restaurant" />
        <h4 className="font-bold font-lg">{name}</h4>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
        {/* <p>{lastMileTravelString}</p> */}
        <p>{costForTwo}</p>
        <p>{avgRating}</p>
      </div>
    );
  };

  export default RestroCards