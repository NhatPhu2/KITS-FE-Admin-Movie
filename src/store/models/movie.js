import axios from "../../service/axios";
export const movie = {
  state: {
    listMovie: null
  },
  reducers: {
    setMovie(state, listMovie) {
      return {
        ...state,
        listMovie
    };
    },
  },
  effects: (dispatch) => ({
    async getAllMovie(page) {
      axios({
        method: "get",
        url: `/movies?page=${page}`,
   
      }).then((res) => {
        this.setMovie(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    },

    async createMovie(formData){
        axios({
            method: "post",
            url: "/movies",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        }).then((res)=> console.log(res))
        .catch((err) => console.log(err))
    },
    async deleteMovie(id){
      axios({
          method: "delete",
          url: `/movies/${id}`,
          headers: { "Content-Type": "multipart/form-data" },
      }).then((res)=> console.log(res))
      .catch((err) => console.log(err))
  }
  }),
};
