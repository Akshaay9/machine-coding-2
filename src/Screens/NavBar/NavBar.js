import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ShopIcon from "@material-ui/icons/Shop";
import Badge from "@material-ui/core/Badge";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext/CartContext";
import { useSaveLaterContext } from "../../Context/SaveLaterContext/SaveLaterContext";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const {
    state: { cart },
  } = useCartContext();

  const {
    state: { saveLater },
  } = useSaveLaterContext();

  const cartLength = () => {
    return cart.length === 0
      ? 0
      : cart.reduce((acc, ele) => (acc += Number(ele.cartQty)), 0);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Fit.Sharkk
          </Typography>

          <NavLink to="/cart">
            <Button color="inherit">
              <Badge badgeContent={cartLength()} color="secondary">
                <ShopIcon />
              </Badge>
            </Button>
          </NavLink>
          <NavLink to="/saved">
            <Button color="inherit">
              <Badge badgeContent={saveLater.length} color="secondary">
                <BookmarkIcon />
              </Badge>
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
