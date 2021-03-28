import request from '@/utils/request';

export const PostRecord = (data: any) => {
  return request.post('/record', data);
};
