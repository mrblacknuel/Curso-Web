import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Navbar from "./Navbar";

import theme from "../ThemeConfig";

const useStyle = makeStyles({
  boton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
});

const App = (props) => {
  // const classes = useStyle(props);

  return (
    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate iure
      asperiores maiores. Adipisci optio aut corporis? Accusamus culpa
      distinctio mollitia exercitationem perspiciatis? Modi ipsum error
      assumenda necessitatibus optio, impedit asperiores.
      <Button variant="contained" color="primary">
        Hola
      </Button>
      <Button variant="contained" color="secondary">
        Aloha
      </Button>
    </ThemeProvider>
  );
};

export default App;
