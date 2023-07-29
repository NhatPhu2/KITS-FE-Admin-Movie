import React, { ChangeEvent, useEffect, useState } from "react";
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

import { top100Films } from "../../FakeData/Database";
import { styled } from "styled-components";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { useDispatch, useSelector } from "react-redux";

const StyledFormAdd = styled.div`
  input[type="date"]:required:invalid::-webkit-datetime-edit {
    color: transparent;
  }
  input[type="date"]:focus::-webkit-datetime-edit {
    color: black !important;
  }
`;

const FormAddEposide = ({id}) => {
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
  };


  const seasons = useSelector((prop) => prop.season);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch.season.getAllSeason();
  }, []);

  useEffect(() => {});

  return (
    <StyledFormAdd>
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
              {seasons.listSeason && seasons.listSeason.map((e)=>(
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
  );
};

export default FormAddEposide;
