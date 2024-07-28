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
              const restroDataSearch = filterText.filter((res) =>
                res.info.name.toLowerCase().includes(text.toLowerCase())
              );
              setListofRestro(restroDataSearch);
            }}
          >
            Search
          </button>
        </div>

        {/* {filter buttion down } */}

        <button
          className="btn"
          onClick={() => {
            const filterdata = filterText.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListofRestro(filterdata);
          }}
        >
          Filter
        </button>
      </div>

      {/* data coming from down 1st */}

      <div className="restroContainer">
        {listRestro.map((res) => {
          return <RestroCards key={res.info.id} {...res.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
