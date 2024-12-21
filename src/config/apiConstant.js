const BASE = 'http://localhost:4000'

const URL = {
    ROOT: () => BASE,
    LOGIN: () => `${BASE}/login`,
    SIGNUP: () => `${BASE}/signup`,
    DASHBOARD: ()=> `${BASE}/user`,
    CHATROOM: (id)=> `${BASE}/user/${id}`,
    PROFILE: ()=> `${BASE}/user/profile`,
    USER_PROFILE: (id)=> `${BASE}/user/profile/${id}`,
    SEARCH_USER: (id)=> `${BASE}/user/search/${id}`
}

export default URL