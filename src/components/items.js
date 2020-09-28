import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  itemInputt: {
    width: "100%",
  },
}));

function Item({ item, onChange }) {
  const classes = useStyles();

  return (
    <div>
      <TextField
        className={classes.itemInputt}
        label="Add item"
        variant="outlined"
        value={item}
        onChange={(event) => onChange(event.target.value)}
      />
      <Icon fontSize ="large">+</Icon>
    </div>
  );
}

function mapStateToProps(state) {
  return { item: state.item };
}

export default connect(mapStateToProps)(Item);
