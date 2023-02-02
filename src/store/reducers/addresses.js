import * as actionTypes from '../actions';

const initialState = {
  addressesData: localStorage.getItem('addressesData'),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDRESSES:
      localStorage.setItem('addressesData', action.addressesData);
      return {
        ...state,
        addressesData: action.addressesData,
      };
    default:
      return state;
  }
};

export default reducer;
