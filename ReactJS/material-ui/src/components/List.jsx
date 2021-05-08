import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export default () => {
  return (
    <div>
      <List component="nav" aria-label="Navbar list">
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText>Texto del circulico</ListItemText>
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemIcon>
            <AddShoppingCartIcon />
          </ListItemIcon>
          <ListItemText>Texto del carrito</ListItemText>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};
