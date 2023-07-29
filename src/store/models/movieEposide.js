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
    // async getAllMovieEposide() {
    //   axios({
    //     method: "get",
    //     url: "/movies",
   
    //   }).then((res) => {
    //     this.setMovie(res.data)
    //     console.log(res.data)
    //   })
    //   .catch((err) => console.log(err))
    // },

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
