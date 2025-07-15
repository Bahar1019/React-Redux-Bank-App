import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      // `prepare` function to process the input before passing to reducer
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(), // Automatically set the current timestamp
          },
        };
      },
      // The actual reducer logic
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
  },
});

export const { createCustomer } = customerSlice.actions;

export default customerSlice.reducer;


// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/ createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "account/updateName":
//       return { ...state, fullName: action.payload };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/ createCustomer",
//     payload: { fullName, nationalID, createdAt: new Date().toISOString() },
//   };
// }

// export function updateName(fullName) {
//   return { type: "account/updateName", payload: fullName };
// }
