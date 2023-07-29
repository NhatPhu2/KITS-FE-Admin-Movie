// export const users = {
//     state:{
//         listUser: [],
//         count: 0
//     },
//     reducers:{
//         setListUser(state,listUser){
//             return {
//                ...state,
//                listUser     
//             }
//         },
//         setCount(state,payload){
//             return state + payload;
//         }
//     },
//     effects: (dispatch) =>({
//         async fetchUsers(payload, rootState) {
//             const data = await fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json());
//             console.log(data);
//             this.setListUser(data);
//           }
//     }),
//     // selectors:(slice,createSelector) =>({
//     //     selectorProducts(){
//     //         return slice(state => state.listUser)
//     //     }
//     // })
// }