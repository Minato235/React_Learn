
const Body = () => {
    return (
        <div className="restroContainer">
          {resData.map((res) => {
            // console.log(res.info)
            //data coming from down here   
            return <RestroCards key={res.info.id} {...res.info} />;
          })}
        </div>    
    );
  };
  export default Body;