export type MyKeysValues = Record<string, string>

export type MySimpleNode = {
  id: number
  lat: number
  lon: number
}
export type MyNode = MySimpleNode & {
  kv: MyKeysValues
}
// I did it...
export type MyWay = {
  id: number
  refs: MySimpleNode[]
  kv: MyKeysValues
}
export type MyRelationNode = MySimpleNode & {
  role: string
}
export type MyRelation = {
  id: number
  kv: MyKeysValues
  nodes: MyRelationNode[]
}
