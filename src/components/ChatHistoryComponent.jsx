import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChatIcon from "@mui/icons-material/Chat";
/*
-> This component shows up when the user clicks on the menu icon to view the chat history
-> messageHeadings state is used to format the text to be shown to the user to differentiate each chat
-> I have used the first text that the user has sent to do this
-> New Chat button enables the user to navigate to the previously unsaved chat that they were working on or a new chat
*/
function ChatHistoryComponent({ open, setOpen, setIndex }) {
  const savedChat = useSelector((state) => state.conversations);
  const [messageHeadings, setMessageHeadings] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < savedChat.length; i++) {
      let message = savedChat[i]?.messages[0]?.text;
      arr.push(message);
    }
    setMessageHeadings([...arr]);
  }, [savedChat]);
  const onHandleClickChat = (index) => {
    setIndex(index);
    setOpen(false);
  };
  const onHandleClickNewChat = () => {
    setIndex(-1);
    setOpen(false);
  };
  return (
    <Box>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ maxWidth: "250px", p: 2 }}>
          <List>
            <ListItem sx={{ justifyContent: "center" }}>
              <Button variant="contained" onClick={onHandleClickNewChat}>
                New Chat
              </Button>
            </ListItem>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" align="center" sx={{ mb: 2 }}>
              Chat History
            </Typography>

            {messageHeadings.map((e, index) => (
              <ListItem key={index}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "inherit",
                    justifyContent: "flex-start",
                    width: "100%",
                  }}
                  onClick={() => onHandleClickChat(index)}
                  startIcon={<ChatIcon />}
                >
                  {/* I added a tooltip here for better visibility as I added no wrap*/}
                  <Tooltip title={e} arrow>
                    <ListItemText
                      primary={e}
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                      }}
                    />
                  </Tooltip>
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
export default ChatHistoryComponent;
