import { useState } from "react";
import Alert from "./components/Alert.js";
import Button from "./components/button.js";
let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
    const [alertVisible,setAlertVisibility]=useState(false)
  return (
    <div className="alert alert-warning alert-dismissible">
        {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>this is alert</Alert>}
        <Button  color="primary" onClick={()=>setAlertVisibility(true)}>button</Button>

    
    </div>
  );
}

export default App;
