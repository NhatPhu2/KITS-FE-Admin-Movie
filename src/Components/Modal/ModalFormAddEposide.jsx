import React, { forwardRef, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
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

const styleBtn = {
  width: 100,
  height: 40,
  fontSize: 8
}

const StyledFormAdd = styled.div`
  input[type="date"]:required:invalid::-webkit-datetime-edit {
    color: transparent;
  }
  input[type="date"]:focus::-webkit-datetime-edit {
    color: black !important;
  }
`;

const ModalFormAddEposide = ({ children, id }) => {
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

  //form

  const [movieId, setMovieId] = useState(id);
  const [description, setDescription] = useState("");
  const [seasonId, setSeasonId] = useState("");
  const [video, setVideo] = useState("");
  const [episode, setEpisode] = useState("");
  const [episodeName, setEpisodeName] = useState("");


  const handleChangeSeasonId = (event) => {
    setSeasonId(event.target.value);
  };

  const handleSubmit = async (event) => {

    console.log({
      movie_id: movieId,
      season_id: seasonId,
      video: video,
      description: description,
      episode: episode,
      episodeName: episodeName
    })
    await dispatch.movieEpisode.createMovieEpisode({
      movie_id: movieId,
      season_id: seasonId,
      video: video,
      description: description,
      episode: episode,
      episodeName: episodeName
    });
    event.preventDefault();
    setOpen(false)
    setOpenAlert(true)
  };


  const seasons = useSelector((prop) => prop.season);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.season.getAllSeason();
  }, []);

  return (
    <div>
      <Button variant="contained" sx={styleBtn} startIcon={<AddIcon />} onClick={handleOpen}>
        {children}
      </Button>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          Create Movie Eposide was successfully!
        </Alert>
      </Snackbar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StyledFormAdd id={id}>
            <h2>Create New Movie</h2>
            <form>
              <Box sx={{ minWidth: 120, marginBottom: 2 }}>
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Movie Id"
                  onChange={(e) => setMovieId(e.target.value)}
                  value={movieId}
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  disabled
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Season ID</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={seasonId}
                    label="Season ID"
                    fullWidth
                    onChange={handleChangeSeasonId}
                  >
                    {seasons.listSeason && seasons.listSeason.map((e) => (
                      <MenuItem value={e.id}>{e.seasonName}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Video"
                onChange={(e) => setVideo(e.target.value)}
                value={video}
                fullWidth
                required
                sx={{ mb: 2 }}
              />
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                fullWidth
                required
                sx={{ mb: 2 }}
              />
              <TextField
                type="number"
                variant="outlined"
                color="secondary"
                label="Eposide"
                onChange={(e) => setEpisode(e.target.value)}
                value={episode}
                fullWidth
                required
                sx={{ mb: 2 }}
              />
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Eposide Name"
                onChange={(e) => setEpisodeName(e.target.value)}
                value={episodeName}
                fullWidth
                required
                sx={{ mb: 2 }}
              />
              <Button variant="outlined" color="secondary" onClick={handleSubmit}>
                Create New
              </Button>
            </form>
          </StyledFormAdd>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalFormAddEposide;
