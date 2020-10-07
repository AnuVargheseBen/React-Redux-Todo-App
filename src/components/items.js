import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
  itemInputt: {
    width: "100%",
  },
  demo: {
    backgroundColor: "white",
  },
}));

function Items(props) {
  const { curItem, items, onChange, onClick,onDelete } = props;
  const [dense] = React.useState(false);
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            My List
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {items.map((allItem, index) => (
                <ListItem key={index}>
                  {allItem}
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" value={curItem} onClick={()=>onDelete(index)}>
                      <DeleteIcon /> 
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>

      <TextField
        className={classes.itemInputt}
        label="Add item"
        variant="outlined"
        value={curItem}
        onChange={(event) => onChange(event.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<AddCircleOutlineSharpIcon />}
                onClick={onClick}
              ></Button>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return { item: state.items };
}

export default connect(mapStateToProps)(Items);
