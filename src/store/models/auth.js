import axios from "axios";
export const auth = {
  state: {
    isAuthenticated: false,
  },
  reducers: {
    setAuth(state, isAuthenticated) {
      return {
        ...state,
        isAuthenticated,
      };
    },
  },
  effects: (dispatch) => ({
    async login(payload) {
      const { username, password } = payload;
      return axios({
        method: "post",
        url: process.env.REACT_APP_LOGIN_URL,
        data: {
          username: username,
          password: password,
        },
      });
    },
  }),
};
