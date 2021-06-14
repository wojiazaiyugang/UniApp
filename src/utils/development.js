/**
 * 是否是开发环境
 * @returns {boolean}
 */
export const isDev = () => {
  return process.env.NODE_ENV === "development"
}