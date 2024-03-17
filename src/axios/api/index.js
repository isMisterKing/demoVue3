import axios from '..';

export function saveList(params) {
  return axios.post('/api/saveList', params);
}