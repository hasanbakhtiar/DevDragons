export const counterReducer = (state = { count: 10 }, action) => {
    switch (action.type) {
      case "inc":
        return { count: state.count + 1 }
      case "dec":
        return { count: state.count - 1 }
      default:
        return state;
    }
  }