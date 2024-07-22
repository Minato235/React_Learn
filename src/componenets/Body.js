import { useState } from "react";
import resData from "../util/data";
import RestroCards from "./RestroCards";
const Body = () => {
  const [listRestro, setListofRestro] = useState(resData);
  return (
    <div className="body">
      <div className="filter">


        <button
          className="btn"
          onClick={() => {
            const filterdata = listRestro.filter(
              (res) => res.info.avgRating > 4.6
            );
            setListofRestro(filterdata);
          }}
        >
          Filter Buttion
        </button>
        
      </div>
      <div className="restroContainer">
        {listRestro.map((res) => {
          console.log(res);
          return <RestroCards key={res.info.id} {...res.info} />;
        })}
      </div>
    </div>
  );
};
export default Body;
