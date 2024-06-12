import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Link,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useBreakpointUp } from "../constant/MediaQuery";
import { navlinks } from "../constant/NavLinks";
import { useState } from "react";

export const Layout = () => {
  const navigate = useNavigate();

  const handleClickMenu = (name: string) => {
    navigate(name);
  };
  const matches = useBreakpointUp("md");
  const [open, setopen] = useState(false);
  const toggleOpen = () => setopen(!open);
  return (
    <AppBar
      position="fixed"
      sx={{ bgcolor: "white", color: "black" }}
      variant="outlined"
    >
      <Toolbar>
        <Box flexGrow={1} display={"flex"} alignItems={"center"}>
          {!matches && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleOpen}
              //   sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
          )}
          <Typography variant="h6" color="inherit" component="div">
            ASDA
          </Typography>
        </Box>
        {matches ? (
          <Box display={"flex"} gap={2}>
            {navlinks.map((nav, index) => (
              <Button
                key={index}
                disableRipple
                onClick={() => handleClickMenu(nav.nav)}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                {nav.name}
              </Button>
            ))}
          </Box>
        ) : (
          <SwipeableDrawer
            anchor={"left"}
            open={open}
            onClose={toggleOpen}
            onOpen={toggleOpen}
          >
            <Box width={220}>
              <List>
                {navlinks.map((nav, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        handleClickMenu(nav.nav);
                        toggleOpen();
                      }}
                    >
                      <ListItemIcon>{<nav.icon />}</ListItemIcon>
                      <ListItemText>{nav.nav.toUpperCase()}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </SwipeableDrawer>
        )}
      </Toolbar>
    </AppBar>
  );
};
