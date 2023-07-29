import axios from "../../service/axios";
export const account = {
  state: {
    listAccount: null
  },
  reducers: {
    setAccount(state, listAccount) {
      return {
        ...state,
        listAccount
    };
    },
  },
  effects: (dispatch) => ({
    async getAllAccount(page) {
      axios({
        method: "get",
        url: `/accounts?page=${page}`,
   
      }).then((res) => {
        this.setAccount(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    }
  }),
};
