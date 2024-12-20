const BASE = 'http://localhost:3000'

const URL = {
    ROOT: () => BASE,
    LOGIN: () => `${BASE}/login`,
    SIGNUP: () => `${BASE}/signup`,
    DASHBOARD: ()=> `${BASE}/user`,
    CHATROOM: ()=> `${BASE}/user/${id}`,
    PROFILE: ()=> `${BASE}/user/profile`,
    USER_PROFILE: (id)=> `${BASE}/user/profile/${id}`,
}

export default URL