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
import { useNavigate } from "react-router-dom";

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

const ModalFormAdd = ({ children }) => {

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
  const [movieName, setMovieName] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [premiereDate, setPremiereDate] = useState("");
  const [releasedDate, setReleasedDate] = useState("");
  const [director, setDirector] = useState("");
  const [writer, setWriter] = useState("");
  const [billingplan, setBillingPlan] = useState("");
  const [actor, setActor] = useState([]);
  const [genres, setGenres] = useState([]);
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
  const handleChangeActor = (event, value) => {
    setActor(value);
  };
  const handleChangeGenres = (event, value) => {
    setGenres(value);
  };

  const handleChangeVideo = (event) => {
    setVideo(event.target.value);
  };

  const handleSubmit = async (event) => {
    const body = await JSON.stringify({
      movieName: movieName,
      country_id: country,
      billingPlan_id: billingplan,
      writer_id: writer,
      director_id: director,
      description: description,
      premiereDate: premiereDate,
      releasedDate: releasedDate,
      runningTime: runningTime,
      actors: actor,
      genres: genres,
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

    for (let i = 0; i < posters.length; i++)
      formData.append(
        "posters",
        posters[i]
      );

    const listTrailer = trailers.split(/[,\s]+/);
    formData.append(
      "trailers",
      new Blob([JSON.stringify(listTrailer)], { type: "application/json" })
    );
    formData.append(
      "video",
      new Blob([video], { type: "application/json" })
    );
    formData.append(
      "banner",
      banner[0]
    );
    await dispatch.movie.createMovie(formData);
    event.preventDefault();
    setOpen(false)
    setOpenAlert(true)
  };

  //upload multi
  const [trailers, setTrailers] = useState();
  const handleTrailer = (event) => {
    setTrailers(event.target.value);
    // console.log(event.target.value)
  };

  const [mainPoster, setMainPoster] = useState();
  const handleMainPoster = (event) => {
    const mPoster = event.target.files;
    const reader = new FileReader();
    console.log(mPoster[0])
    setMainPoster(event.target.files);

    console.log(mainPoster);
  };
  const [posters, setPoster] = useState();
  const handlePoster = (event) => {
    const poster = event.target.files;
    const reader = new FileReader();
    setPoster(event.target.files);
    console.log(poster);
  };

  const [banner, setBanner] = useState();
  const handleOnChangeBanner = (event) => {
    setBanner(event.target.files);
  };

  const countries = useSelector((prop) => prop.country);
  const directories = useSelector((prop) => prop.director);
  const writeries = useSelector((prop) => prop.writer);
  const billingPlans = useSelector((prop) => prop.billingPlan);
  const actors = useSelector((prop) => prop.actor);
  const genress = useSelector((prop) => prop.genres);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.country.getAllCountry();
    dispatch.director.getAllDirector();
    dispatch.writer.getAllWriter();
    dispatch.billingPlan.getAllBillingPlan();
    dispatch.actor.getAllActor();
    dispatch.genres.getAllGenres();
  }, []);
  //

  return (
    <div>
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
        {children}
      </Button>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          Create Movie was successfully!
        </Alert>
      </Snackbar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <StyledFormAdd>
            <h2>Create New Movie</h2>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
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
              {actors.listActor && (
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={actors.listActor.data}
                  sx={{ width: "100%", marginBottom: 2 }}
                  getOptionLabel={(option) => option.actorName}
                  value={actor}
                  onChange={handleChangeActor}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField {...params} label="Actor" placeholder="Actor" />
                  )}
                />
              )}
              {genress.listGenres && (
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={genress.listGenres}
                  sx={{ width: "100%", marginBottom: 2 }}
                  getOptionLabel={(option) => option.genresName}
                  value={genres.id}
                  onChange={handleChangeGenres}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField {...params} label="Genres" placeholder="Genres" />
                  )}
                />
              )}

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
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Trailers"
                  onChange={handleTrailer}
                  value={trailers}
                  required
                  sx={{ mb: 2 }}
                />
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
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
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  fullWidth
                >
                  Poster
                  <input
                    hidden
                    multiple
                    accept="image/*"
                    type="file"
                    onChange={handlePoster}
                  />
                  <PhotoCamera />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  fullWidth
                >
                  Banner
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleOnChangeBanner}
                  />
                  <PhotoCamera />
                </IconButton>
                {posters && <img src={posters} alt="Uploaded Image" height="30" />}
              </Stack>
              <Button variant="outlined" color="secondary" type="submit">
                Create New
              </Button>
            </form>
          </StyledFormAdd>


        </Box>
      </Modal>
    </div>
  );
};
export default ModalFormAdd;
