import request from '@/utils/request';

export const PostRecord = () => {
  return request.post('/record', {});
};
