export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQA1b2XmsrCPdzY0u-yYv8GyB9KJ9hYdfSqedx6HyGpxAR1TM4VZa_ol2FV_ZsIjWwlo1NZSrkWajCQav4uGORfSHyXVhaEFbAtBOgYKB91zinxzp00x5ZiCUlIzf8V_gEvQx7ZjAFUPqCwwRmPLoPRa7MIX4yrlspM2LSbvKgw74KJf5moF",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
