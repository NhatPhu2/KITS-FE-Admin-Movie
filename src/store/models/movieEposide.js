import axios from "../../service/axios";
export const movieEpisode = {
  state: {
    listMovieEpisode: null
  },
  reducers: {
    setMovieEpisode(state, listMovieEpisode) {
      return {
        ...state,
        listMovieEpisode
    };
    },
  },
  effects: (dispatch) => ({
    async createMovieEpisode(body){
        axios({
            method: "post",
            url: "/movies-episode",
            data: body
        }).then((res)=> console.log(res))
        .catch((err) => console.log(err))
    }
  }),
};
