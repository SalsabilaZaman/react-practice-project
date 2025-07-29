import { useState } from "react";

function ListGroup() {
  const listItems = ["Book", "Pen", "Pencil", "Eraser", "Sharpener"];
  // let selectedIndex = -1;

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    console.log(event.currentTarget.textContent);
  };

  return (
    <>
      <h1 className="text-center">List Group</h1>
      <ul className="list-group">
        {listItems.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
