export const getCurrentUserId = state => state.auth.user._id;
export const getSignUpErrors = state => state.auth.signUpErrors;
export const getAuthToken = () => localStorage.getItem('jwt-token');
