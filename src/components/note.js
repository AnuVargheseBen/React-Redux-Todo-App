import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";

import Item from "./items";
import { updateNote, additem } from "../store/note/action";

const useStyles = makeStyles(() => ({
  headInput: {
    width: "100%",
  },
}));

function Note({ note, dispatch }) {
  const classes = useStyles();

  function handleNameChange(value) {
    dispatch(updateNote("name", value));
  }

  function handleItemChange(value) {
    dispatch(additem("item", value));
  }



  return (
    <Card variant="outlined">
      <CardContent>
        <TextField
          className={classes.headInput}
          label="Name your Note"
          value={note.name}
          onChange={(event)=>handleNameChange(event.target.value)}
        />

        <Item onChange={handleItemChange} item={note.item}/>
      </CardContent>
    </Card>
  );
}

function mapStateToProps(state) {
  return { note: state.note };
}

export default connect(mapStateToProps)(Note);
