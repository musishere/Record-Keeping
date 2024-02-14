import Header from "./Header";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
// import Fields from "./Fields";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const AddData = () => [
    setData([...data, { name, email }]),
    setName(""),
    setEmail(""),
  ];

  const removeitem=(index)=>{
    let arr=data;
    arr.splice(index);
    setData([...arr])
  }
  return (
    <div className="App">
      <Header />
      <div className="Text-field">
        <Stack direction="row" spacing={2} />
        <div className="Text-field1">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
        </div>
        <div className="Text-field2">
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </div>
        <div className="Add-Button">
          <Button
            onClick={AddData}
            className="Add"
            variant="contained"
            color="error"
          >
            <AddIcon />
          </Button>
        </div>
      </div>
      <Stack />
      <div className="Show-data">
        <div className="Data">
          <h1>Name</h1>
          <h1>Email</h1>
          <h1 className="remove">Remove</h1>
        </div>
      </div>
      <div className="display-data">
        {data.map((element, index) => {
          return (
            <div key={index} className="Show-data">
              <div key={index} className="Data">
                <h2>{element.name}</h2>
                <h2>{element.email}</h2>
                <button onClick={()=>removeitem(index)} className="Delete-button">
                  <RemoveCircleOutlineOutlinedIcon />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
