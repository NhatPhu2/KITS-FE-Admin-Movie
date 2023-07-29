import axios from "../../service/axios";
export const country = {
  state: {
    listCountry: null
  },
  reducers: {
    setCountry(state, listCountry) {
      return {
        ...state,
        listCountry
    };
    },
  },
  effects: (dispatch) => ({
    async getAllCountry() {
      axios({
        method: "get",
        url: "/country",
   
      }).then((res) => {
        this.setCountry(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    },
    async getPageCountry(page) {
      axios({
        method: "get",
        url: `/country?page=${page}`,
   
      }).then((res) => {
        this.setCountry(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    }
  }),
};
