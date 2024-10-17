import { UserApiAction } from "../action/UserApiAction";
interface UserState {
  isLoading: boolean;
  data: any[];
  error: any;
}

const initialState: UserState = {
  isLoading: false,
  data: [],
  error: {},
};

export default (state = initialState, d: UserApiAction) => {
  switch (d.type) {
    case "UserRequest":
      return { ...state, isLoading: true };

    case "UserSuccess":
      return { ...state, isLoading: false, data: d.payload };
    case "UserError":
      return { ...state, isLoading: false, error: d.payload };

    default:
      return state;
  }
};
