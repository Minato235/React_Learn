import { useEffect, useState } from "react";
import resData from "../util/data";
import RestroCards from "./RestroCards";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listRestro, setListofRestro] = useState(resData);
  const [text, setText] = useState("");
  const [filterText, setFilterText] = useState(resData);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // // Live api use this code
  // const fetchData = async () => {
  //   const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3248023&lng=78.63317339999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //   const data = await response.json();
  //   console.log(data);
  //   // setListofRestro(data.data.cards); // Adjust the path based on the actual response structure
  // };

  if (listRestro.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="search"
            className="search-box"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() => {
              const restroDataSearch = listRestro.filter((res) =>
                res.info.name.toLowerCase().includes(text.toLowerCase())
              );
              setFilterText(restroDataSearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn"
          onClick={() => {
            const filterdata = listRestro.filter(
              (res) => res.info.avgRating > 4.6
            );
            setFilterText(filterdata);
          }}
        >
          Filter
        </button>
      </div>
      <div className="restroContainer">
        {filterText.map((res) => {
          return <RestroCards key={res.info.id} {...res.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
