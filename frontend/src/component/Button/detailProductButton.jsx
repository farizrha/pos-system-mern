import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1400,
  height: 700,
  bgcolor: "black",
  color: "white",
  border: 3,
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
};

export default function DetailProductButton(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        size="small"
        sx={{
          backgroundColor: "#696969",
          color: "white",
          ":hover": { backgroundColor: "#7fff00", color: "white" },
        }}
      >
        <InfoIcon sx={{ color: "white" }} />
        Detail
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h2" component="h1">
            {props.name}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 20,
                top: 20,
                width: 60,
                height: 60,
                color: "white",
              }}
            >
              <CloseIcon
                sx={{
                  width: 60,
                  height: 60,
                  ":hover": { color: "#7fff00" },
                }}
              />
            </IconButton>
          </Typography>
          <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2 }}>
            {props.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
