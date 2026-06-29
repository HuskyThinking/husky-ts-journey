import { Button, TextField } from "@mui/material";
import { useState } from "react";

function Add() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <form style={{textAlign: 'center', marginTop: '66px'}}>
      <TextField 
        sx={{marginBottom: '10px'}} 
        label="Title" 
        variant="outlined" 
        onChange={(e) => setTitle(e.target.value)}/>
      <br />
      <TextField
        sx={{marginBottom: '10px'}}
        id="outlined-multiline-static"
        label="content"
        variant="outlined"
        onChange={(e) => setContent(e.target.value)}
        multiline
        rows={4}
      />
      <br />       
      <Button variant="contained" size="large">Add</Button>
    </form>
  );
}

export default Add;