import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/users";

class ApiService {
    // GET: 조회
    // POST: 등록
    // PUT: 수정
    // DELETE: 삭제

    static fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    static fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + "/" + userId);
    }

    static deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + "/" + userId);
    }

    static addUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }

    static editUser(user) {
        return axios.put(USER_API_BASE_URL + "/" + user.id, user);
    }
} 

export default ApiService;