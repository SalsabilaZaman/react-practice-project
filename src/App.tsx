// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          This is an alert message!<h1>ALERT! Muhahaha</h1>
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisible(true)}>
        Click Me!
      </Button>
    </div>
  );
}

// let listItems = ["Book", "Pen", "Pencil", "Eraser", "Sharpener"];
//  const handleSelectItem = (item: string) => {
//   console.log("Selected item:", item);
// };

// return (
//   <div>
//     <ListGroup
//       items={listItems}
//       heading="Stationaries"
//       onSelectItem={handleSelectItem}
//     ></ListGroup>
//   </div>
// );

export default App;
