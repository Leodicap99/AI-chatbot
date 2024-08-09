import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Snackbar, TextField, Tooltip } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { useState } from "react";
/*
  -> This component is the share dialog
  -> openToast refers to the state that checks if the user has copied the link and if so shoes a toast
     at the bottom left of the screen
*/
function ShareDialog({openShareDialog, setOpenShareDialog }) {
  const link =
    "https://sentisum.notion.site/Frontend-Assignment-975499c6b9eb4054bc8722dd9d141ba0";
  const [openToast, setOpenToast] = useState(false);
  const onHandleCopyLink = () => {
    setOpenToast(true);
  };
  return (
    <>
      <Dialog open={openShareDialog}>
        <DialogTitle>Share Link</DialogTitle>
        <DialogContent>
          <TextField
            label="Copy this link"
            fullWidth
            variant="outlined"
            value={link}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <Tooltip>
                  <IconButton onClick={onHandleCopyLink}>
                    <FileCopyIcon />
                  </IconButton>
                </Tooltip>
              ),
            }}
            sx={{ marginTop: "10px", width: "500px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenShareDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openToast}
        onClose={() => setOpenToast(false)}
        autoHideDuration={3000}
        message="Link copied to the clipboard"
      ></Snackbar>
    </>
  );
}
export default ShareDialog;