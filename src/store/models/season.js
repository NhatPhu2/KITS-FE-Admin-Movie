import axios from "../../service/axios";
export const season = {
  state: {
    listSeason: null
  },
  reducers: {
    setSeason(state, listSeason) {
      return {
        ...state,
        listSeason
    };
    },
  },
  effects: (dispatch) => ({
    async getAllSeason(page) {
      axios({
        method: "get",
        url: `/seasons?page=${page}`,
   
      }).then((res) => {
        this.setSeason(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    }
  }),
};
