import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChatIcon from "@mui/icons-material/Chat";
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
        <Box sx={{ minWidth: "250px", p: 2 }}>
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
                  <ListItemText primary={e} />
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
