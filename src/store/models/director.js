import axios from "../../service/axios";
export const director = {
  state: {
    listDirector: null
  },
  reducers: {
    setDirector(state, listDirector) {
      return {
        ...state,
        listDirector
    };
    },
  },
  effects: (dispatch) => ({
    async getAllDirector() {
      axios({
        method: "get",
        url: "/director",
   
      }).then((res) => {
        this.setDirector(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    },
    async getPageDirector(page) {
      axios({
        method: "get",
        url: `/director?page=${page}`,
   
      }).then((res) => {
        this.setDirector(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    }
  }),
};
