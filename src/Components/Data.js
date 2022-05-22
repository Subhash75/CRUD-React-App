import React from "react";

function Data({ item, edit, deleteWork }) {

  

  return (
    <div className="item">
      {item.map((data, index) => {
        return (
          <div key={index} className='demo'>
            {data.map((data1, index1) => {
              return (
                <React.Fragment key={index1}>
                  <p>{data1}</p>
                </React.Fragment>
              );
            })}
            <button onClick={() => edit(data,index)}>Edit</button>
            <button onClick={() => deleteWork(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Data;
