export const handlePending = (state, { payload }) => {
  state.error = null;
};

export const handleRejected = (state, { error, payload }) => {
  state.error = payload ?? error.message;
};
