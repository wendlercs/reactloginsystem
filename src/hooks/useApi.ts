import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});
export const useApi = () => ({
    validateToken: async (token: string) => {
        //false api content
        return {
            user: {id: 9, name: 'Alex', email: 'alex@gmail.com'},
        };
        const response = await api.post('/validate', {token});
        return response.data;
    },

    signin: async (email: string, password: string) => {
        //false api content
        return {
            user: {id: 9, name: 'Alex', email: 'alex@gmail.com'},
            token: '112233445566778899',
        };
        
        const response = await api.post('/signin', {email, password});
        return response.data;
    },

    logout: async () => {
        return{status: true};
        const response = await api.post('/logout');
        return response.data
    }

});