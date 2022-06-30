import axios from 'axios';

const ELITE_REGISTER = 'http://elite-school-register.herokuapp.com';

const eliteRegisterApi = axios.create({
  baseURL: ELITE_REGISTER,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default eliteRegisterApi;
