import React, { useState } from "react";
import Data from "./Data";


let elementIndex = undefined;
function Create() {
  const [name, changeName] = useState("");
  const [age, changeAge] = useState("");
  const [hobby, changeHobby] = useState("");
  const [country, changeCountry] = useState("");

  const [ update, changeUpdate ] = useState(true)

  const [item, setItem] = useState([]);

  const handleName = (event) => {
    changeName(event.target.value);
  };
  const handleAge = (event) => {
    changeAge(event.target.value);
  };
  const handleHobby = (event) => {
    changeHobby(event.target.value);
  };
  const handleCountry = (event) => {
    changeCountry(event.target.value);
  };

  const create = () => {
    if (name !== "" && age !== "" && hobby !== "" && country !== "") {
      setItem(() => {
        return [...item, [name, age, hobby, country]];
      });
      changeName("");
      changeAge("");
      changeHobby("");
      changeCountry("");
    }
  };

  const edit = (data, index) => {
   
    elementIndex = index;
    changeName(data[0])
    changeAge(data[1])
    changeHobby(data[2])
    changeCountry(data[3])
    changeUpdate(false)
    
  }

  const updateData = () => {
    changeUpdate(true)
    changeName(name)
    changeAge(age)
    changeHobby(hobby)
    changeCountry(country)
    item[elementIndex] = [name, age, hobby, country]
    changeName('')
    changeAge('')
    changeHobby('')
    changeCountry('')
  }

  const deleteWork = (deleteIndex) => {
    setItem(() => {
      return item.filter((value, index) => {
       if(index !== deleteIndex) {
         return value
       }
      })
    })
  }

  return (
    <>
      <div className="createItem">
        <form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleName}
            required
          />
          <br />
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={handleAge}
            required
          />
          <br />
          <label htmlFor="hobby">Hobby</label>
          <input
            type="text"
            id="hobby"
            value={hobby}
            onChange={handleHobby}
            required
          />
          <br />
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={handleCountry}
            required
          />
          <br />

          {update ? (<button type="submit" onClick={create}>
            Create
          </button>) : (<button type="submit" onClick={updateData}>
            Update
          </button>)}

          {/* <button type="submit" onClick={create}>
            Create
          </button> */}
        </form>
      </div>
      <Data item={item} edit={edit} deleteWork={deleteWork} />
    </>
  );
}

export default Create;
