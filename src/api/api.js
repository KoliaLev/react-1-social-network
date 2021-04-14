import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "b26f5f83-f436-46d2-9f60-37fe761c495f",
  },
});

export const usersAPI = {
  getUsers(currentPage, usersCount) {
    return instance
      .get(`users?page=${currentPage}&count=${usersCount}`)
      .then((response) => response.data);
  },
  deleteFollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => response.data);
  },
  postFollow(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
};
