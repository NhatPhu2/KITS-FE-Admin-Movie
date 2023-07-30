import React, { ChangeEvent, forwardRef, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";
import {
  TextField,
  Button,
  Stack,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
} from "@mui/material";
import { styled } from "styled-components";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useDispatch, useSelector } from "react-redux";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const StyledFormAdd = styled.div`
  input[type="datetime-local"]:required:invalid::-webkit-datetime-edit {
    color: transparent;
  }
  input[type="datetime-local"]:focus::-webkit-datetime-edit {
    color: black !important;
  }
`;

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

const ModalFormUpdate = ({ children, id }) => {

  const [open, setOpen] = useState(false);
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
  const [movieName, setMovieName] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [premiereDate, setPremiereDate] = useState("");
  const [releasedDate, setReleasedDate] = useState("");
  const [director, setDirector] = useState("");
  const [writer, setWriter] = useState("");
  const [billingplan, setBillingPlan] = useState("");
  const [video, setVideo] = useState("");
  const [runningTime, setRunningTime] = useState("");
  let formData = new FormData();
  const [request, setRequest] = useState({});

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleChangeDirector = (event) => {
    setDirector(event.target.value);
  };
  const handleChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const handleChangeBillingPlan = (event) => {
    setBillingPlan(event.target.value);
  };
  const handleChangeVideo = (event) => {
    setVideo(event.target.value);
  };

  const handleSubmit = async (event) => {
    const body = await JSON.stringify({
      id: movieId,
      movieName: movieName,
      country_id: country,
      billingPlan_id: billingplan,
      writer_id: writer,
      director_id: director,
      description: description,
      premiereDate: premiereDate,
      releasedDate: releasedDate,
      runningTime: runningTime,
    });
    await formData.append(
      "request",
      new Blob([body], {
        type: "application/json",
      })
    );
    formData.append(
      "mainPoster",
      mainPoster[0]
    );
    formData.append(
      "video",
      new Blob([video], { type: "application/json" })
    );
    await dispatch.movie.updateMovie(formData);
    event.preventDefault();
    setOpen(false)
    setOpenAlert(true)
  };

  //upload multi

  const [mainPoster, setMainPoster] = useState();
  const handleMainPoster = (event) => {
    const mPoster = event.target.files;
    const reader = new FileReader();
    console.log(mPoster[0])
    setMainPoster(event.target.files);

    console.log(mainPoster);
  };

  const countries = useSelector((prop) => prop.country);
  const directories = useSelector((prop) => prop.director);
  const writeries = useSelector((prop) => prop.writer);
  const billingPlans = useSelector((prop) => prop.billingPlan);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.country.getAllCountry();
    dispatch.director.getAllDirector();
    dispatch.writer.getAllWriter();
    dispatch.billingPlan.getAllBillingPlan();
  }, []);
  //

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        {children}
      </Button>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          Update Movie was successfully!
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
            <h2>Update Movie</h2>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
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
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Movie Name"
                  name="movieName"
                  onChange={(e) => setMovieName(e.target.value)}
                  value={movieName}
                  fullWidth
                  required
                />
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={country}
                      fullWidth
                      label="Country"
                      onChange={handleChangeCountry}
                    >
                      {countries.listCountry &&
                        countries.listCountry.data.map((e) => (
                          <MenuItem value={e.id}>{e.countryName}</MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Box>
              </Stack>
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
                type="text"
                variant="outlined"
                color="secondary"
                label="RunningTime"
                onChange={(e) => setRunningTime(e.target.value)}
                value={runningTime}
                fullWidth
                required
                sx={{ mb: 2 }}
              />
              <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
                <TextField
                  type="datetime-local"
                  variant="outlined"
                  color="secondary"
                  label="Premiere Date"
                  className="dated"
                  onChange={(e) => setPremiereDate(e.target.value)}
                  value={premiereDate}
                  fullWidth
                  required
                />
                <TextField
                  type="datetime-local"
                  variant="outlined"
                  color="secondary"
                  label="Released Date"
                  className="dated"
                  onChange={(e) => setReleasedDate(e.target.value)}
                  value={releasedDate}
                  fullWidth
                  required
                />
              </Stack>
              <Box sx={{ minWidth: 120, marginBottom: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Director</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={director}
                    label="Director"
                    onChange={handleChangeDirector}
                  >
                    {directories.listDirector &&
                      directories.listDirector.data.map((el) => (
                        <MenuItem value={el.id}>{el.directorName}</MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 120, marginBottom: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Writer</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={writer}
                    label="Writer"
                    onChange={handleChangeWriter}
                  >
                    {writeries.listWriter &&
                      writeries.listWriter.data.map((e) => (
                        <MenuItem value={e.id}>{e.writerName}</MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 120, marginBottom: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Billing Plan</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={billingplan}
                    label="Billing Plan"
                    onChange={handleChangeBillingPlan}
                  >
                    {billingPlans.listBillingPlan &&
                      billingPlans.listBillingPlan.map((e) => (
                        <MenuItem value={e.id}>{e.billingPlanName}</MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Box>
              <Stack direction="row" alignItems="center" spacing={2}>
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Video"
                  onChange={handleChangeVideo}
                  value={video}
                  required
                  sx={{ mb: 2 }}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  fullWidth
                >
                  Main Poster
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleMainPoster}
                  />
                  <PhotoCamera />
                </IconButton>
                {mainPoster && (
                  <img src={mainPoster} alt="Uploaded Image" height="30" />
                )}
              </Stack>
              <Button variant="outlined" color="secondary" type="submit">
                Update
              </Button>
            </form>
          </StyledFormAdd>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalFormUpdate;
