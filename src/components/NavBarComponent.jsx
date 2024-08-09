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
/*
  -> This component is responsible for the view layer for the toolbar/navigation bar on top and the chat history menu
  -> open state checks if the user wants to access the chat history through the menu icon button
  -> setIndex is a prop sent from App.js to set the index of the chat when the user decides to check a previous chat
  -> darkMode and setDarkMode are props responsible for theming sent from App.js
*/
function NavBarComponent({ setIndex, darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  const handleThemeChange = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar sx={{ backgroundColor: "primary" }}>
            <IconButton size="large" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h5"  sx={{ marginLeft: "5px" }}>
              SentiSum AI ChatBot
            </Typography>
            <IconButton
              onClick={handleThemeChange}
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
