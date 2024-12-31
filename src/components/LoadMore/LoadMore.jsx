import React, { useState, useEffect, useId } from "react";
import "./styles.css";

//  14//09/2024

function LoadMore() {
   
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [count, setCount] = useState(0);
  const [ disable, setDisable] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      let cnt = count === 0 ? 1 : count * 10;
      let url2 = `https://dummyjson.com/products?limit=12&skip=${parseInt(cnt)}`;

      const response = await fetch( url2);
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setData( (prevData) => [...prevData, ...result.products]);
        setErrorMsg("");
        setLoading(false);
        
        console.log("Fetched data : ", data.length);
        
      }
    } catch (error) {
      setErrorMsg("Error fetching data. Try again.");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect( () => {
    if ( data &&  data.length >= 24 ) {
      setDisable(true);
    }
  },[data]);

  // if (data && data.length > 0) {
  //   data.map((item, index) => {
  //     console.log("Printing item : ", item.images[0]);
  //   });
  // }

  if (loading) {
    return <h1>Loading... ! Please Wait</h1>;
  }

  if (errorMsg) {
    return <h1>{errorMsg}</h1>;
  }

  return (
    <>
      <div className="load-more-container">
        <div className="product-container">
          {data && data.length
            ? data.map( (item, index ) => (
                <div className="product"  key={ `${item.id} -${index}`} >
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              ))
            : null}
        </div>
        <div className="button-container">
      
      { disable ? <p className="text-red-500 text-4xl">No more products to load</p> : 
      <button onClick={ ( ) => setCount( count + 1)} disabled={disable}  className="bg-green-600 p-5 rounded-full">
      Load More Products
    </button> 
    }

        </div>
      </div>

    </>
  );
}

export default LoadMore;


// 14/09/24, 19:25pm