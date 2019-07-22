let initialState = {};

/**
 * Reducer function
 * @param {object} state
 * @param {string} action
 */

export default (state = initialState, action) => {
  let { type, payload = {} } = action;
  let { id, model, record } = payload;

  switch (type) {
    case "GET":
      return { ...state, [model]: record };

    case "POST":
      const newRecord = state[model].concat(record);
      return { ...state, [model]: newRecord };

    case "PUT":
      const putList = state[model].map((entry, idx) =>
        idx === id ? record : entry
      );
      return { ...state, [model]: putList };

    case "DELETE":
      const deleteList = state[model].filter((r, idx) => r._id !== id);
      return { ...state, [model]: deleteList };

    default:
      return state;
  }
};