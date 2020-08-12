import {createStore} from 'vuex';

const store = createStore({
    namespaced: true,
    state: {
        // 存储token
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
    },

    mutations: {
        // 修改token，并将token存入localStorage
        changeLogin (state, token) {
            state.Authorization = token;
            localStorage.setItem('Authorization',token);
        }
    },
    getters: {
        getToken (state) {
            return state.Authorization;
        }
    }
});

export default store;