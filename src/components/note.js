import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";


import Items from "./items";
import { updateNote, addItem,deleteItem } from "../store/note/action";

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
      dispatch(updateNote("item", value));
  }

  function handleDeleteItem(index){
    dispatch(deleteItem(index));
    console.log('Deleted');
  }

  function handleItemAdd() {
    dispatch(addItem());
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <TextField
          className={classes.headInput}
          label="Name your Note"
          value={note.name}
          onChange={(event) => handleNameChange(event.target.value)}
        />

        <Items
          onChange={handleItemChange}
          onClick={handleItemAdd}
          onDelete={handleDeleteItem}
          items={note.items}
          curItem={note.item}
        />
      </CardContent>
    </Card>
  );
}

function mapStateToProps(state) {
  return { note: state.note };
}

export default connect(mapStateToProps)(Note);
