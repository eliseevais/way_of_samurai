import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "7baa0947-f1d6-498f-bd5d-ed507ad6475a"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`/follow/${userId}`)
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
      
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}