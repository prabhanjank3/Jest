import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store/slices/Item.slice";
import { getTodoData } from "../store/slices/Todo.slice";

const useStyle = makeStyles({
  root: {
    fontSize: 30
  }
});

const Item = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoData());
  }, []);

  const classes = useStyle();
  return <p className={classes.root}>This is custom component</p>;
};
export default Item;
