import { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [inputdata, setInputData] = useState([]);
  //const [filterData, setFilteredData] = useState([]);
  const [editItemId, setEditItemId] = useState(null);
  const inputRef = useRef();
  const editInputRef = useRef();
  const handleClick = () => {
    let inputValue = inputRef.current.value;
    const randomId = Math.floor(Math.random() * 100);

    const val = { id: randomId, value: inputValue };
    setInputData((prev) => {
      return [...prev, val];
    });
    // setFilteredData((prev) => {
    //   return [...prev, val];
    // });
  };

  const handleEditItemId = (id) => {
    setEditItemId(id);
  };

  const handleDelete = (objId) => {
    //e.target.style.textDecoration = "line-through";
    setInputData((prevObjects) =>
      prevObjects.filter((obj) => obj.id !== objId)
    );
  };

  const handleSaveEdit = (itemId) => {
    setEditItemId(null);
    setInputData((prevObjects) =>
      prevObjects.map((obj) =>
        obj.id === itemId
          ? {
              ...obj,
              value: editInputRef.current.value
            }
          : obj
      )
    );
  };
  return (
    <div className="App">
      {inputdata.length}
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Add</button>
      <div>
        {inputdata &&
          inputdata?.map((obj) => {
            return (
              <>
                <li key={obj.id}>
                  {editItemId === obj.id ? (
                    <>
                      <input ref={editInputRef} />
                      <button onClick={() => handleSaveEdit(obj.id)}>
                        Save
                      </button>
                    </>
                  ) : (
                    <div>
                      {obj.value}
                      <button onClick={() => handleEditItemId(obj.id)}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(obj.id)}>Delete</button>
                    </div>
                  )}
                </li>
              </>
            );
          })}
      </div>
    </div>
  );
}
