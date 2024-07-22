import {IMG_CDN_URL} from "../util/const"
  const RestroCards = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) => {
    return (
      <div className="res-card">
        <img className="res-logo" src={IMG_CDN_URL + cloudinaryImageId} alt="restaurant" />
        <h4>{name}</h4>
        <p>{cuisines.join(", ")}</p>
        <p>{area}</p>
        <p>{lastMileTravelString}</p>
        <p>{costForTwoString}</p>
        <p>{avgRating}</p>
      </div>
    );
  };

  export default RestroCards