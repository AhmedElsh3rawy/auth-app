export function apiResponse<T = any>(
  statusCode: number,
  message: string,
  data: T,
) {
  return { statusCode, message, data };
}
