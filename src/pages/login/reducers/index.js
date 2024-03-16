export const loginInitialStore = {
  isAuth: !!localStorage.getItem("token"),
  isLoading: false,
  errors: null,
  token: localStorage.getItem("token") || null,
  userInfo: {},
} 