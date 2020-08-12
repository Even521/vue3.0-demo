import {post} from '../utils/http.js';
//登陆接口
export const login=()=>{
  return post('/user/login')
}