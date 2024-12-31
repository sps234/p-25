import React, { useId } from "react";
import data from "./data";
import { useState } from "react";
import "../Accordian/styles.css";

function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(id) {
    console.log(id);
    setSelected(id === selected ? null : id);
  }
  return (
    <>
      <div className="wrapper">
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item" key={useId()} id={dataItem.id}>
                <div
                  className="title"
                  onClick={() => handleSingleSelection(dataItem.id)}
                >
                  <h2>{dataItem.question}</h2>
                  <span>+</span>
                </div>
                {selected === dataItem.id ? (
                  <div className="answer"> {dataItem.answer} </div>
                ) : null}
              </div>
            ))
          ) : (
            <div className="no-data">No Data Found</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Accordian;
