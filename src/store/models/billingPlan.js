import axios from "../../service/axios";
export const billingPlan = {
  state: {
    listBillingPlan: null
  },
  reducers: {
    setBillingPlan(state, listBillingPlan) {
      return {
        ...state,
        listBillingPlan
    };
    },
  },
  effects: (dispatch) => ({
    async getAllBillingPlan() {
      axios({
        method: "get",
        url: "/billing-plan",
   
      }).then((res) => {
        this.setBillingPlan(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    },
    async getPageBillingPlan(page) {
      axios({
        method: "get",
        url: `/billing-plan?page=${page}`,
   
      }).then((res) => {
        this.setBillingPlan(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    }
  }),
};
