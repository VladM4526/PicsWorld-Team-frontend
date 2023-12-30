export const selectUser = state => state.auth.user;
export const selectStayAuth = state => state.auth.stayAuth;
export const selectUserToken = state => state.auth.token;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectorUserProfile = state => state.auth.users;
