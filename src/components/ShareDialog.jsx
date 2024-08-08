import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Snackbar, TextField, Tooltip } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { useState } from "react";
function ShareDialog({openShareDialog, setOpenShareDialog }) {
  const link = "https://chatgpt.com/c/c5b5d4d4-eb68-4333-8ab3-23e02837e0bd";
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