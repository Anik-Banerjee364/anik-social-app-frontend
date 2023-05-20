const AuthReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_START":
            return{
                user:{ 
                    _id: "646080fac6c8b80732adef42",
                    userName:"Anik Banerjee",
                    email:"anik@gmail.com",
                    followers:[],
                    followings:[],
                },
                isFetching: true,
                error:false,
            };

        case "LOGIN_SUCCESS":
            return{
                user: action.payload,
                isFetching: false,
                error: false,
            };
        
        case "LOGIN_FAIL":
            return{
                user: null,
                isFetching: false,
                error: action.payload,
            };
        case "FOLLOW":
            return{
                ...state,
    user: {
      ...(state.user || {}),
      followings: state.user && state.user.followings ? [...state.user.followings, action.payload] : [action.payload],
    },
            };
        case "UNFOLLOW":
            return{
                ...state,
                user: {
                  ...(state.user || {}),
                  followings: state.user && state.user.followings
                    ? state.user.followings.filter(following => following !== action.payload)
                    : [],
                },
            };

        default:
                return state
    }
};


export default AuthReducer;