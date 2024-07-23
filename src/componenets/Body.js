import { useEffect, useState } from "react";
import resData from "../util/data";
import RestroCards from "./RestroCards";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listRestro, setListofRestro] = useState(resData);
  // useEffect(()=>{
  //   fetchData();
  // },[])

  // //Live api use this code
  // const fetchData=async()=>{
  //   const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3248023&lng=78.63317339999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //   console.log(data.json);
  //   //add cors extensiton and 
  //   setListofRestro(after console add data )
  // }

  if(listRestro.length===0){
    <Shimmer></Shimmer>
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="btn"
          onClick={() => {
            const filterdata = listRestro.filter(
              (res) => res.info.avgRating > 4.6
            )
            setListofRestro(filterdata);
          }}
        >
          Filter Buttion
        </button>
      </div>
      <div className="restroContainer">
        {listRestro.map((res) => {
          console.log(res.info);
          return <RestroCards key={res.info.id} {...res.info} />;
        })}
      </div>
    </div>
  );
};
export default Body;
