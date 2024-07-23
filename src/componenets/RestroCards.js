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
      <div className="res-card">
        <img className="res-logo" src={IMG_CDN_URL + cloudinaryImageId} alt="restaurant" />
        <h4>{name}</h4>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
        {/* <p>{lastMileTravelString}</p> */}
        <p>{costForTwo}</p>
        <p>{avgRating}</p>
      </div>
    );
  };

  export default RestroCards