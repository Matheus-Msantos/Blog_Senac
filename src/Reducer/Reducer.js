export function queueReducer(state, action) {
  switch (action.type) {
    case "ADD_QUEUE":
      if (state.includes(action.payload.post))
        return state;
      else
        return [...state, action.payload.post];
    case "REMOVE_QUEUE":
      return state.filter((post) => post.id !== action.payload.post.id);
    default:
      return state
  }
}