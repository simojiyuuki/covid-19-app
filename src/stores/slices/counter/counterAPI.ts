// mock function to mimic making an async request for data
/* eslint @typescript-eslint/explicit-module-boundary-types: 0 */
export const fetchCount = (amount = 1) => {
  return new Promise<{ data: number }>(resolve => setTimeout(() => resolve({ data: amount }), 500));
};
