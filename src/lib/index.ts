export const toNetworkByteOrder = (data: Uint8Array): number =>
  data[3] + (data[2] << 8) + (data[1] << 16) + (data[0] << 24)

const shouldDebug = true
export const debug = (str: string) => shouldDebug && console.log(`::${str}`)
export const info = (str: string) => console.log(`:${str}`)
