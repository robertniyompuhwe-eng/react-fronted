import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selected=-1
  //Event handler
  const handleClick= (event:MouseEvent) =>console.log(event) 

  return (
    <>
      <h1>List</h1>

      <ul className="list-group">
        {items.length == 0 ? <p>No item found</p> : null}
        <ul className="list-group">
          {items.map((item) => (
            <li
              className="list-group-item active"
              key={item}
              onClick={handleClick} 
            >
              {item}
            </li>
          ))}
        </ul>
      </ul>
    </>
  );
}

export default ListGroup;
