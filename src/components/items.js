import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { additem } from "../store/note/action";

const useStyles = makeStyles(() => ({
  itemInputt: {
    width: "100%",
  },
}));
function Item(item, dispatch) {
  const classes = useStyles();

  function handleNameChange(value) {
    dispatch(additem("name", value));
  }
  return (
    <TextField
      className={classes.itemInputt}
      label="Add item"
      variant="outlined"
      value={item.name}
      onChange={(event) => handleNameChange(event.target.value)}
    />
  );
}

function mapStateToProps(state) {
  return { item: state.item };
}

export default connect(mapStateToProps)(Item);
