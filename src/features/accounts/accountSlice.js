import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loan: 0,
  loanPurpose: "",
  balance: 0,
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit:function(state, action) {
      state.balance = state.balance + action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },

      reducer(state, action) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state, action) {
      state.balance = state.balance - state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

console.log(accountSlice);

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch, getState) {
    try {
      dispatch({ type: "account/convertingCurrency" });

      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
      );
      if (!res.ok) throw new Error("Currency conversion failed");

      const data = await res.json();
      console.log(data)
      const converted = data.rates?.USD || 0; // fallback to 0 if no rate
      console.log(converted)
      dispatch({ type: "account/deposit", payload: converted });
    } catch (error) {
      console.error("Currency conversion failed", error);
    }
  };
}

export default accountSlice.reducer;

// export default function accountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload,isLoading:false };
//     case "withdraw/account":
//       return { ...state, balance: state.balance - action.payload };
//     case "requestLoan/account":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };

//     case "payloan/account":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };

//     case "account/convertingCurrency":
//       return { ...state, isLoading: true };

//     default:
//       return state;
//   }
// }

// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "deposit/account", payload: amount };

//   return async function (dispatch, getState) {
//     try {
//       dispatch({ type: "account/convertingCurrency" });

//       const res = await fetch(
//         `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//       );
//       if (!res.ok) throw new Error("Currency conversion failed");

//       const data = await res.json();
//       const converted = data.rates?.USD || 0; // fallback to 0 if no rate
//       dispatch({ type: "deposit/account", payload: converted });
//     } catch (error) {
//       console.error("Currency conversion failed", error);
//     }
//   };
// }

// export function withdraw(amount) {
//   return { type: "withdraw/account", payload: amount };
// }
// export function requestloan(amount, purpose) {
//   return {
//     type: "requestLoan/account",
//     payload: { amount, purpose },
//   };
// }
// export function payloan() {
//   return { type: "payloan/account" };
// }

