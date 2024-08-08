import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import ShareDialog from "./ShareDialog";
function ChatReadOnlyComponent({ index }) {
  const chat = useSelector((state) => state.conversations[index]);
  const [messages, setMessages] = useState([]);
  const [feedBackInfo, setFeedbackInfo] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [openShareDialog,setOpenShareDialog] = useState(false);
  useEffect(() => {
    if (chat?.messages?.length) {
      let arr = [];
      for (let i = 0; i < chat.messages.length; i++) {
        arr.push(chat.messages[i]);
      }
      setMessages([...arr]);
      setFeedbackInfo(chat.feedback);
    }
  }, [chat]);
  const handleOpenFeedback = () => {
    setOpenDialog(true);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          padding: 2,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            marginBottom: 8,
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent:
                  message.sender === "user" ? "flex-end" : "flex-start",
                mb: 1,
              }}
            >
              <Card
                sx={{
                  maxWidth: "50%",
                  borderRadius: "20px",
                  width: "fit-content",
                  bgcolor: message.sender === "user" ? "primary.main" : "grey",
                  mb: 2,
                }}
              >
                <CardContent>
                  <Typography >{message.text}</Typography>
                </CardContent>
                {message.sender === "ai" &&
                  message.thumbsUp !== message.thumbsDown && (
                    <Box sx={{ padding: "5px" }}>
                      <ThumbUpIcon
                        color={message.thumbsUp}
                        sx={{ marginLeft: "5px" }}
                      />
                      <ThumbDownIcon
                        color={message.thumbsDown}
                        sx={{ marginLeft: "10px" }}
                      />
                    </Box>
                  )}
              </Card>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 2,
            backgroundColor: "background.paper",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: '20px'
          }}
        >
          <Button
            variant="contained"
            sx={{ marginLeft: "5px", height: "50px" }}
            onClick={handleOpenFeedback}
          >
            Show Feeback
          </Button>
          <IconButton onClick={()=>setOpenShareDialog(true)}>
            <ShareIcon />
          </IconButton>
        </Box>
      </Box>
      <Dialog open={openDialog}>
        <DialogTitle>SentiSum AI Response Feedback Form</DialogTitle>
        <DialogContent>
          <Typography sx={{ margin: "10px" }}>
            Please rate the responses of the AI bot out of 5 stars
          </Typography>
          <Rating
            name="simple-controlled"
            size="large"
            value={feedBackInfo.stars}
            readOnly
            sx={{ margin: "10px" }}
          />
          <TextField
            label="Description"
            multiline
            rows={4}
            value={feedBackInfo.desc}
            variant="outlined"
            inputProps={{readOnly:true}}
            fullWidth
            sx={{ marginTop: "10px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
      <ShareDialog openShareDialog={openShareDialog} setOpenShareDialog={setOpenShareDialog}/>
    </>
  );
}
export default ChatReadOnlyComponent;
