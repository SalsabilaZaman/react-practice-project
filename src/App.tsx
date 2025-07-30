import ListGroup from "./components/ListGroup";

function App() {
  let listItems = ["Book", "Pen", "Pencil", "Eraser", "Sharpener"];
   const handleSelectItem = (item: string) => {
    console.log("Selected item:", item);
  };

  return (
    <div>
      <ListGroup
        items={listItems}
        heading="Stationaries"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
