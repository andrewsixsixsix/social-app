import { IApiError } from '@/types/index';

const isObject = (value: unknown): value is object => value != null && typeof value === 'object';

export const isApiError = (err: unknown): err is IApiError =>
  isObject(err) && 'status' in err && 'message' in err;
