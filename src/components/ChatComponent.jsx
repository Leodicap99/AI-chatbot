import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Rating,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useState } from "react";
import { mockAPIResponse } from "../mocks/mockAIAPI";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeedback,
  addMessage,
  editThumbsDown,
  editThumbsUp,
  saveChat,
} from "../redux/chatSlice";
/* 
  -> This component is the user interface for the user to chat with the bot
  -> hoveredindex checks if a user hovers over the ai bot's response
  if hoveredIndex>=0 , then yes the user has and the index value locates the response
  else the user hasnt hovered over an ai response
  -> inputValue stores the value that the user has inputted in the chatbox textfield
  -> openDialog checks if the user has click on the save chat button to bring up the feedback form
  -> feedbackDesc hold the subjective feedback response from the user
  
  */
function ChatComponent() {
  const [inputValue, setInputValue] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [openDialog, setOpenDialog] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedbackDesc, setFeedbackDesc] = useState("");
  const dispatch = useDispatch();
  const [errorMessage,setErrorMessage] = useState(false);
  const currentChat = useSelector((state) => state.currentChat);
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.length > 0) {
      handleClick();
    }
  };
  const handleClick = async () => {
    if(inputValue.length===0)return;
    dispatch(addMessage({ sender: "user", text: inputValue }));
    setInputValue("");
    let data = await mockAPIResponse(inputValue);
    data.thumbsUp = "";
    data.thumbsDown = "";
    dispatch(addMessage(data));
  };
  const handleThumbsUpClick = (index) => {
    dispatch(editThumbsUp(index));
  };
  const handleThumbsDownClick = (index) => {
    dispatch(editThumbsDown(index));
  };
  const handleOpenFeedback = () => {
    if(!currentChat.length){
      setErrorMessage(true);
      return;
    }
    setOpenDialog(true);
  };
  const handleSaveChat = () => {
    dispatch(saveChat());
    let feedback = {
      stars: rating,
      desc: feedbackDesc,
    };
    dispatch(addFeedback({ feedback: feedback }));
    setOpenDialog(false);
    setFeedbackDesc("");
    setRating(0);
  };
  const onClickCancelDialog = () => {
    setOpenDialog(false);
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
          {currentChat.map((message, index) => (
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
                onMouseEnter={() => {
                  message.sender === "ai"
                    ? setHoveredIndex(index)
                    : setHoveredIndex(-1);
                }}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <CardContent>
                  <Typography>{message.text}</Typography>
                </CardContent>
                {message.sender === "ai" &&
                  (hoveredIndex === index ||
                    message.thumbsUp !== message.thumbsDown) && (
                    <Box sx={{}}>
                      <IconButton onClick={() => handleThumbsUpClick(index)}>
                        <ThumbUpIcon color={message.thumbsUp} />
                      </IconButton>
                      <IconButton onClick={() => handleThumbsDownClick(index)}>
                        <ThumbDownIcon color={message.thumbsDown} />
                      </IconButton>
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
          }}
        >
          <TextField
            label="Enter your question"
            autoComplete="off"
            onKeyDown={handleKeyPress}
            id="fullWidth"
            sx={{ width: "80%" }}
            onChange={handleChangeInput}
            value={inputValue}
          />
          <Button
            variant="contained"
            sx={{ marginLeft: "10px", height: "50px" }}
            onClick={handleClick}
          >
            <SendIcon />
          </Button>
          <Button
            variant="contained"
            sx={{ marginLeft: "5px", height: "50px" }}
            onClick={handleOpenFeedback}
          >
            Save Chat
          </Button>
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
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            sx={{ margin: "10px" }}
          />
          <TextField
            label="Description"
            multiline
            rows={4}
            value={feedbackDesc}
            variant="outlined"
            fullWidth
            placeholder="Enter your feedback here"
            sx={{ marginTop: "10px" }}
            onChange={(e) => setFeedbackDesc(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSaveChat}>
            Save
          </Button>
          <Button onClick={onClickCancelDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={errorMessage}
        autoHideDuration={1000}
        onClose={()=>setErrorMessage(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          No chat to be saved
        </Alert>
      </Snackbar>
    </>
  );
}
export default ChatComponent;
