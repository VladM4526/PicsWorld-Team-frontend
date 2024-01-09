export const selectUser = state => state.auth.user;
export const selectStayAuth = state => state.auth.stayAuth;
export const selectUserToken = state => state.auth.token;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoggedIn = state => state.auth.selectIsLoggedIn;

export const selectorUserProfile = state => state.users.avatarURL;

export const selectDailyNorma = state => state.auth.user.waterRate;
