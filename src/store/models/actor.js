import axios from "../../service/axios";
export const actor = {
  state: {
    listActor: null
  },
  reducers: {
    setActor(state, listActor) {
      return {
        ...state,
        listActor
    };
    },
  },
  effects: (dispatch) => ({
    async getAllActor() {
      axios({
        method: "get",
        url: "/actors",
   
      }).then((res) => {
        this.setActor(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    },
    async getPageActor(page) {
      axios({
        method: "get",
        url: `/actors?page=${page}`,
   
      }).then((res) => {
        this.setActor(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    }
  }),
};
