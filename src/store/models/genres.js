import axios from "../../service/axios";
export const genres = {
  state: {
    listGenres: null
  },
  reducers: {
    setGenres(state, listGenres) {
      return {
        ...state,
        listGenres
    };
    },
  },
  effects: (dispatch) => ({
    async getAllGenres() {
      axios({
        method: "get",
        url: "/genres",
   
      }).then((res) => {
        this.setGenres(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    },
    async getPageGenres(page) {
      axios({
        method: "get",
        url: `/genres?page=${page}`,
   
      }).then((res) => {
        this.setGenres(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    }
  }),
};
