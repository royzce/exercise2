import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
const NavBar = ({ products, onToggleButton, toggleButton }) => {
  const iconButton = () => {
    if (toggleButton) {
      return (
        <IconButton sx={{ paddingLeft: "auto" }} onClick={onToggleButton}>
          <HomeIcon />
        </IconButton>
      );
    }
    return (
      <IconButton sx={{ paddingLeft: "auto" }} onClick={onToggleButton}>
        <Badge
          color="secondary"
          badgeContent={products.filter((product) => product.qty > 0).length}
        >
          <ShoppingCartIcon sx={{ color: "black" }} />
        </Badge>
      </IconButton>
    );
  };
  return (
    <>
      <Box sx={{ paddingBottom: "1rem" }}>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "flex-end" }}>{iconButton()}</Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
