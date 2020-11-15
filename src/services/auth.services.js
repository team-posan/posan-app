import axios from "axios";

const API_URL = "http://localhost:5000/user/";

// const register = (username, email, password) => {
//   return axios.post(API_URL + "signup", {
//     username,
//     email,
//     password,
//   });
// };

const login = ({username, password}) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      console.log('dari auth', response)
      if (response.data.access_token) {
        localStorage.setItem("access_token", JSON.stringify(response.data));
      }
      return response.data;
    }).catch(err => console.log('dari auth', err))
};

const logout = () => {
  localStorage.removeItem("access_token");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export {
  // register,
  login,
  logout,
  getCurrentUser,
}