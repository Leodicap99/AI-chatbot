import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChatHistoryComponent from "./ChatHistoryComponent";
import { useState } from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
function NavBarComponent({ setIndex, darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  const handleThemeChange = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "primary" }}>
            <IconButton size="large" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h5"  sx={{ marginLeft: "5px" }}>
              SentiSum AI ChatBot
            </Typography>
            <IconButton
              onClick={handleThemeChange}
              sx={{ color: darkMode ? "primary.main" : "yellow" }}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <ChatHistoryComponent open={open} setOpen={setOpen} setIndex={setIndex} />
    </>
  );
}
export default NavBarComponent;
