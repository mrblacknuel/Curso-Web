import { createMuiTheme } from "@material-ui/core/styles";
import { purple, lightGreen } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: purple[500],
    },
    secondary: lightGreen,
  },
});

export default theme;
