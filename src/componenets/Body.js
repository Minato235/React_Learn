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


    return (
      <div className="body">
        <div className="p-4">
          <div className="flex items-center ">
            <input
              type="search"
              className="border border-solid border-black px-2 py-1"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="px-4 m-2 bg-green-500 hover:bg-violet-300 rounded-lg"
              onClick={() => {
                const restroDataSearch = filterText.filter((res) =>
                  res.info.name.toLowerCase().includes(text.toLowerCase())
                );
                setListofRestro(restroDataSearch);
              }}
            >
              Search
            </button>
            <button
              className="px-4 ml-10  bg-green-500 hover:bg-violet-300 rounded-lg justify-center space-x-2"
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
        </div>
  
        {/* data coming from down 1st */}
  
        <div className="flex flex-wrap justify-center">
          {listRestro.map((res) => {
            return <RestroCards key={res.info.id} {...res.info} />
          })}
        </div>
      </div>
    );
  };
  
  export default Body;
  