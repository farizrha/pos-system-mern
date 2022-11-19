import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Button } from "@mui/material";
import { DrawerNavbarComp } from "../Drawer/drawerNavbar";
import { DrawerOrderComp } from "../Drawer/drawerOrder";

const drawerWidth = 240;
const drawerWidthOrder = 350;

// search input
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "350px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(2),
    width: "800px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "350px",
    [theme.breakpoints.up("md")]: {
      width: "745px",
    },
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "openOrder",
})(({ theme, open, openOrder }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width:
      openOrder === true
        ? `calc(87% - ${drawerWidth}px)`
        : `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(openOrder && {
    marginRight: drawerWidthOrder,
    width:
      open === true
        ? `calc(87% - ${drawerWidthOrder}px)`
        : `calc(100% - ${drawerWidthOrder}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const [openOrder, setOpenOrder] = React.useState(true);

  const handleDrawerOpenOrder = () => {
    setOpen(true);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        openOrder={openOrder}
        //  sx={{ marginRight: openOrder ? "250px" : "0px", width: openOrder ? `calc(100% - ${drawerWidth}px)`: "0px"}}
      >
        <Toolbar sx={{ backgroundColor: "black" }}>
          {open === false ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 10,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <WhatshotIcon
                sx={{
                  color: "#7fff00",
                  marginRight: "10px",
                  marginLeft: "15px",
                }}
              />
              <Typography
                variant="h6"
                sx={{ color: "white", marginRight: "auto", fontWeight: "bold" }}
              >
                POS
              </Typography>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                sx={{ color: "white", marginRight: "auto", fontWeight: "bold" }}
              ></Typography>
            </>
          )}

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button
            sx={{
              marginLeft: "auto",
              color: "white",
              ":hover": { backgroundColor: "#7fff00", color: "white" },
            }}
          >
            Login
          </Button>
          <Button
            sx={{
              marginLeft: "25px",
              color: "white",
              ":hover": { backgroundColor: "#7fff00", color: "white" },
            }}
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <DrawerNavbarComp open={open} setOpen={setOpen} />
      <DrawerOrderComp open={openOrder} setOpen={setOpenOrder} />
    </>
  );
}
