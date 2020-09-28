import React from "react";
import Note from "../components/note";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
        <Typography >Pusthagam</Typography>
        <Note />
      </Container>
    </React.Fragment>
    
  );
}

export default App;
