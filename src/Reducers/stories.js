const storyReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_STORIES":
      return action.payload;
    case "CREATE_STORY":
      return [...state, action.payload.data];
    default:
      return state;
  }
};

export default storyReducer;
