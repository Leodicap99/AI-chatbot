import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChatHistoryComponent from "./ChatHistoryComponent";
import { useState } from "react";
function NavBarComponent({setIndex}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "white" }}>
            <IconButton size="large" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" color="black" sx={{ marginLeft: "5px" }}>
              SentiSum AI ChatBot
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <ChatHistoryComponent open={open} setOpen={setOpen} setIndex={setIndex} />
    </>
  );
}
export default NavBarComponent;
