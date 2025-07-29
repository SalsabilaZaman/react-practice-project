function ListGroup() {
  const listItems = ["Book", "Pen", "Pencil", "Eraser", "Sharpener"];

  return (
    <>
      <h1 className="text-center">List Group</h1>
      <ul className="list-group">
        {listItems.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
