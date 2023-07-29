import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";
// import {
//   FormControlLabel,
//   FormGroup,
//   FormLabel,
//   TextField,
//   Typography,
// } from "@mui/material";
// import Rating from '@mui/material/Rating';
// import { CheckBox } from "@mui/icons-material";
import { useState } from "react";
import FormAdd from "../Form/FormAdd";
import FormAddEposide from "../Form/FormAddEposide";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const styleBtn = {
  width: 100,
  height: 40,
  fontSize: 8
}

const ModalFormAddEposide = ({ children, id }) => {
  const [open, setOpen] = useState(false);
  // const [formValue, setFormValue] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handleTextFieldChange = (

  // )

  return (
    <div>
      <Button variant="contained" sx={styleBtn} startIcon={<AddIcon />} onClick={handleOpen}>
        {children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormAddEposide id={id}/>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalFormAddEposide;
