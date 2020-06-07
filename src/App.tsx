import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});

function App(): JSX.Element {
  const classes = useStyles();
  return <div className={classes.root}>Text</div>;
}

export default App;
