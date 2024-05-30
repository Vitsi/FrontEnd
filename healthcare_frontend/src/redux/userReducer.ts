import { UPDATE_PROFILE_IMAGE } from "../actions/userActions";

const intialState = {
    profileImage: null as string | null, 
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userReducer = ( state = intialState, action: any) => {
    switch (action.type) {
        case UPDATE_PROFILE_IMAGE:
            return {
                ...state,
                profileImage: action.payload,
            };
        default:
            return state;
    }
}

export default userReducer;