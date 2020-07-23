import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function channelBanner() {
  return request('/api/channelBanner/list?channelType=2');
}
