import React, { forwardRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {ReactComponent as Delete} from "../../assets/icons/iconDelete.svg"
// import {
//   FormControlLabel,
//   FormGroup,
//   FormLabel,
//   TextField,
//   Typography,
// } from "@mui/material";
// import Rating from '@mui/material/Rating';
// import { CheckBox } from "@mui/icons-material";
import FormAdd from "../Form/FormAdd";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
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

const StyledModalDel = styled.div`
    button{
        width: 20%;
        height: 2.5em;
        span{
            margin: 0 auto;
        }
    }
    .iconModalDel{
        width: 100%;
    }
`

const ModalDelete = ({ children, id }) => {
  const [open, setOpen] = useState(false);
  // const [formValue, setFormValue] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    //Alert
    const [openAlert, setOpenAlert] = React.useState(false);

    const handleCloseAlert = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenAlert(false);
    };
  const movies = useSelector((prop)=> prop.movie);
  const dispatch = useDispatch();

  const handleDel = (id) => {
        dispatch.movie.deleteMovie(id);
        setOpen(false)
        setOpenAlert(true)
  }

  return (
    <StyledModalDel>
        <Button variant="outlined" color="error"  startIcon={<Delete className="iconModalDel" />} onClick={handleOpen}>
            {children}
        </Button>
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }}>
          Movie was Deleted!
        </Alert>
      </Snackbar>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            Are You sure about that?
            <Button variant="outlined" color="error"  startIcon={<Delete className="iconModalDel" />} onClick={()=> handleDel(id)}>
                OK
            </Button>
            <Button variant="outlined" color="primary" onClick={handleClose}>
                CANCEL
            </Button>
            </Box>
        </Modal>
    </StyledModalDel>
  );
};
export default ModalDelete;
