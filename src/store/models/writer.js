import axios from "../../service/axios";
export const writer = {
  state: {
    listWriter: null
  },
  reducers: {
    setWriter(state, listWriter) {
      return {
        ...state,
        listWriter
    };
    },
  },
  effects: (dispatch) => ({
    async getAllWriter() {
      axios({
        method: "get",
        url: "/writer",
   
      }).then((res) => {
        this.setWriter(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    },
    async getPageWriter(page) {
      axios({
        method: "get",
        url: `/writer?page=${page}`,
   
      }).then((res) => {
        this.setWriter(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    }
  }),
};
