import { Box, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
  }
  const onHandleClickNewChat = () =>{
    setIndex(-1)
    setOpen(false);
  }
  return (
    <Box>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ minWidth: "250px" }}>
          <List>
            <ListItem>
              <Button variant="contained" onClick={onHandleClickNewChat}>New Chat</Button>
            </ListItem>
            {messageHeadings.map((e, index) => (
              <ListItem>
                <Button variant="text" sx={{ color: "inherit" }} onClick={()=>onHandleClickChat(index)}>
                  <ListItemText primary={e} sx={{ color: "inherit" }} />
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