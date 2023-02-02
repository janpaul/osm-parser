// package: OSMPBF
// file: src/proto/osmformat.proto

import * as jspb from "google-protobuf";

export class HeaderBlock extends jspb.Message {
  hasBbox(): boolean;
  clearBbox(): void;
  getBbox(): HeaderBBox | undefined;
  setBbox(value?: HeaderBBox): void;

  clearRequiredFeaturesList(): void;
  getRequiredFeaturesList(): Array<string>;
  setRequiredFeaturesList(value: Array<string>): void;
  addRequiredFeatures(value: string, index?: number): string;

  clearOptionalFeaturesList(): void;
  getOptionalFeaturesList(): Array<string>;
  setOptionalFeaturesList(value: Array<string>): void;
  addOptionalFeatures(value: string, index?: number): string;

  hasWritingprogram(): boolean;
  clearWritingprogram(): void;
  getWritingprogram(): string | undefined;
  setWritingprogram(value: string): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): string | undefined;
  setSource(value: string): void;

  hasOsmosisReplicationTimestamp(): boolean;
  clearOsmosisReplicationTimestamp(): void;
  getOsmosisReplicationTimestamp(): number | undefined;
  setOsmosisReplicationTimestamp(value: number): void;

  hasOsmosisReplicationSequenceNumber(): boolean;
  clearOsmosisReplicationSequenceNumber(): void;
  getOsmosisReplicationSequenceNumber(): number | undefined;
  setOsmosisReplicationSequenceNumber(value: number): void;

  hasOsmosisReplicationBaseUrl(): boolean;
  clearOsmosisReplicationBaseUrl(): void;
  getOsmosisReplicationBaseUrl(): string | undefined;
  setOsmosisReplicationBaseUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeaderBlock.AsObject;
  static toObject(includeInstance: boolean, msg: HeaderBlock): HeaderBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeaderBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeaderBlock;
  static deserializeBinaryFromReader(message: HeaderBlock, reader: jspb.BinaryReader): HeaderBlock;
}

export namespace HeaderBlock {
  export type AsObject = {
    bbox?: HeaderBBox.AsObject,
    requiredFeaturesList: Array<string>,
    optionalFeaturesList: Array<string>,
    writingprogram?: string,
    source?: string,
    osmosisReplicationTimestamp?: number,
    osmosisReplicationSequenceNumber?: number,
    osmosisReplicationBaseUrl?: string,
  }
}

export class HeaderBBox extends jspb.Message {
  hasLeft(): boolean;
  clearLeft(): void;
  getLeft(): number | undefined;
  setLeft(value: number): void;

  hasRight(): boolean;
  clearRight(): void;
  getRight(): number | undefined;
  setRight(value: number): void;

  hasTop(): boolean;
  clearTop(): void;
  getTop(): number | undefined;
  setTop(value: number): void;

  hasBottom(): boolean;
  clearBottom(): void;
  getBottom(): number | undefined;
  setBottom(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeaderBBox.AsObject;
  static toObject(includeInstance: boolean, msg: HeaderBBox): HeaderBBox.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeaderBBox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeaderBBox;
  static deserializeBinaryFromReader(message: HeaderBBox, reader: jspb.BinaryReader): HeaderBBox;
}

export namespace HeaderBBox {
  export type AsObject = {
    left?: number,
    right?: number,
    top?: number,
    bottom?: number,
  }
}

export class PrimitiveBlock extends jspb.Message {
  hasStringtable(): boolean;
  clearStringtable(): void;
  getStringtable(): StringTable;
  setStringtable(value?: StringTable): void;

  clearPrimitivegroupList(): void;
  getPrimitivegroupList(): Array<PrimitiveGroup>;
  setPrimitivegroupList(value: Array<PrimitiveGroup>): void;
  addPrimitivegroup(value?: PrimitiveGroup, index?: number): PrimitiveGroup;

  hasGranularity(): boolean;
  clearGranularity(): void;
  getGranularity(): number | undefined;
  setGranularity(value: number): void;

  hasLatOffset(): boolean;
  clearLatOffset(): void;
  getLatOffset(): number | undefined;
  setLatOffset(value: number): void;

  hasLonOffset(): boolean;
  clearLonOffset(): void;
  getLonOffset(): number | undefined;
  setLonOffset(value: number): void;

  hasDateGranularity(): boolean;
  clearDateGranularity(): void;
  getDateGranularity(): number | undefined;
  setDateGranularity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrimitiveBlock.AsObject;
  static toObject(includeInstance: boolean, msg: PrimitiveBlock): PrimitiveBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrimitiveBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrimitiveBlock;
  static deserializeBinaryFromReader(message: PrimitiveBlock, reader: jspb.BinaryReader): PrimitiveBlock;
}

export namespace PrimitiveBlock {
  export type AsObject = {
    stringtable: StringTable.AsObject,
    primitivegroupList: Array<PrimitiveGroup.AsObject>,
    granularity?: number,
    latOffset?: number,
    lonOffset?: number,
    dateGranularity?: number,
  }
}

export class PrimitiveGroup extends jspb.Message {
  clearNodesList(): void;
  getNodesList(): Array<Node>;
  setNodesList(value: Array<Node>): void;
  addNodes(value?: Node, index?: number): Node;

  hasDense(): boolean;
  clearDense(): void;
  getDense(): DenseNodes | undefined;
  setDense(value?: DenseNodes): void;

  clearWaysList(): void;
  getWaysList(): Array<Way>;
  setWaysList(value: Array<Way>): void;
  addWays(value?: Way, index?: number): Way;

  clearRelationsList(): void;
  getRelationsList(): Array<Relation>;
  setRelationsList(value: Array<Relation>): void;
  addRelations(value?: Relation, index?: number): Relation;

  clearChangesetsList(): void;
  getChangesetsList(): Array<ChangeSet>;
  setChangesetsList(value: Array<ChangeSet>): void;
  addChangesets(value?: ChangeSet, index?: number): ChangeSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrimitiveGroup.AsObject;
  static toObject(includeInstance: boolean, msg: PrimitiveGroup): PrimitiveGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrimitiveGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrimitiveGroup;
  static deserializeBinaryFromReader(message: PrimitiveGroup, reader: jspb.BinaryReader): PrimitiveGroup;
}

export namespace PrimitiveGroup {
  export type AsObject = {
    nodesList: Array<Node.AsObject>,
    dense?: DenseNodes.AsObject,
    waysList: Array<Way.AsObject>,
    relationsList: Array<Relation.AsObject>,
    changesetsList: Array<ChangeSet.AsObject>,
  }
}

export class StringTable extends jspb.Message {
  clearSList(): void;
  getSList(): Array<Uint8Array | string>;
  getSList_asU8(): Array<Uint8Array>;
  getSList_asB64(): Array<string>;
  setSList(value: Array<Uint8Array | string>): void;
  addS(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringTable.AsObject;
  static toObject(includeInstance: boolean, msg: StringTable): StringTable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringTable;
  static deserializeBinaryFromReader(message: StringTable, reader: jspb.BinaryReader): StringTable;
}

export namespace StringTable {
  export type AsObject = {
    sList: Array<Uint8Array | string>,
  }
}

export class Info extends jspb.Message {
  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): number | undefined;
  setVersion(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): number | undefined;
  setTimestamp(value: number): void;

  hasChangeset(): boolean;
  clearChangeset(): void;
  getChangeset(): number | undefined;
  setChangeset(value: number): void;

  hasUid(): boolean;
  clearUid(): void;
  getUid(): number | undefined;
  setUid(value: number): void;

  hasUserSid(): boolean;
  clearUserSid(): void;
  getUserSid(): number | undefined;
  setUserSid(value: number): void;

  hasVisible(): boolean;
  clearVisible(): void;
  getVisible(): boolean | undefined;
  setVisible(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Info.AsObject;
  static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Info;
  static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
}

export namespace Info {
  export type AsObject = {
    version?: number,
    timestamp?: number,
    changeset?: number,
    uid?: number,
    userSid?: number,
    visible?: boolean,
  }
}

export class DenseInfo extends jspb.Message {
  clearVersionList(): void;
  getVersionList(): Array<number>;
  setVersionList(value: Array<number>): void;
  addVersion(value: number, index?: number): number;

  clearTimestampList(): void;
  getTimestampList(): Array<number>;
  setTimestampList(value: Array<number>): void;
  addTimestamp(value: number, index?: number): number;

  clearChangesetList(): void;
  getChangesetList(): Array<number>;
  setChangesetList(value: Array<number>): void;
  addChangeset(value: number, index?: number): number;

  clearUidList(): void;
  getUidList(): Array<number>;
  setUidList(value: Array<number>): void;
  addUid(value: number, index?: number): number;

  clearUserSidList(): void;
  getUserSidList(): Array<number>;
  setUserSidList(value: Array<number>): void;
  addUserSid(value: number, index?: number): number;

  clearVisibleList(): void;
  getVisibleList(): Array<boolean>;
  setVisibleList(value: Array<boolean>): void;
  addVisible(value: boolean, index?: number): boolean;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DenseInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DenseInfo): DenseInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DenseInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DenseInfo;
  static deserializeBinaryFromReader(message: DenseInfo, reader: jspb.BinaryReader): DenseInfo;
}

export namespace DenseInfo {
  export type AsObject = {
    versionList: Array<number>,
    timestampList: Array<number>,
    changesetList: Array<number>,
    uidList: Array<number>,
    userSidList: Array<number>,
    visibleList: Array<boolean>,
  }
}

export class ChangeSet extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeSet.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeSet): ChangeSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeSet;
  static deserializeBinaryFromReader(message: ChangeSet, reader: jspb.BinaryReader): ChangeSet;
}

export namespace ChangeSet {
  export type AsObject = {
    id?: number,
  }
}

export class Node extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  clearKeysList(): void;
  getKeysList(): Array<number>;
  setKeysList(value: Array<number>): void;
  addKeys(value: number, index?: number): number;

  clearValsList(): void;
  getValsList(): Array<number>;
  setValsList(value: Array<number>): void;
  addVals(value: number, index?: number): number;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): Info | undefined;
  setInfo(value?: Info): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLon(): boolean;
  clearLon(): void;
  getLon(): number | undefined;
  setLon(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Node.AsObject;
  static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Node;
  static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
  export type AsObject = {
    id?: number,
    keysList: Array<number>,
    valsList: Array<number>,
    info?: Info.AsObject,
    lat?: number,
    lon?: number,
  }
}

export class DenseNodes extends jspb.Message {
  clearIdList(): void;
  getIdList(): Array<number>;
  setIdList(value: Array<number>): void;
  addId(value: number, index?: number): number;

  hasDenseinfo(): boolean;
  clearDenseinfo(): void;
  getDenseinfo(): DenseInfo | undefined;
  setDenseinfo(value?: DenseInfo): void;

  clearLatList(): void;
  getLatList(): Array<number>;
  setLatList(value: Array<number>): void;
  addLat(value: number, index?: number): number;

  clearLonList(): void;
  getLonList(): Array<number>;
  setLonList(value: Array<number>): void;
  addLon(value: number, index?: number): number;

  clearKeysValsList(): void;
  getKeysValsList(): Array<number>;
  setKeysValsList(value: Array<number>): void;
  addKeysVals(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DenseNodes.AsObject;
  static toObject(includeInstance: boolean, msg: DenseNodes): DenseNodes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DenseNodes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DenseNodes;
  static deserializeBinaryFromReader(message: DenseNodes, reader: jspb.BinaryReader): DenseNodes;
}

export namespace DenseNodes {
  export type AsObject = {
    idList: Array<number>,
    denseinfo?: DenseInfo.AsObject,
    latList: Array<number>,
    lonList: Array<number>,
    keysValsList: Array<number>,
  }
}

export class Way extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  clearKeysList(): void;
  getKeysList(): Array<number>;
  setKeysList(value: Array<number>): void;
  addKeys(value: number, index?: number): number;

  clearValsList(): void;
  getValsList(): Array<number>;
  setValsList(value: Array<number>): void;
  addVals(value: number, index?: number): number;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): Info | undefined;
  setInfo(value?: Info): void;

  clearRefsList(): void;
  getRefsList(): Array<number>;
  setRefsList(value: Array<number>): void;
  addRefs(value: number, index?: number): number;

  clearLatList(): void;
  getLatList(): Array<number>;
  setLatList(value: Array<number>): void;
  addLat(value: number, index?: number): number;

  clearLonList(): void;
  getLonList(): Array<number>;
  setLonList(value: Array<number>): void;
  addLon(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Way.AsObject;
  static toObject(includeInstance: boolean, msg: Way): Way.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Way, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Way;
  static deserializeBinaryFromReader(message: Way, reader: jspb.BinaryReader): Way;
}

export namespace Way {
  export type AsObject = {
    id?: number,
    keysList: Array<number>,
    valsList: Array<number>,
    info?: Info.AsObject,
    refsList: Array<number>,
    latList: Array<number>,
    lonList: Array<number>,
  }
}

export class Relation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  clearKeysList(): void;
  getKeysList(): Array<number>;
  setKeysList(value: Array<number>): void;
  addKeys(value: number, index?: number): number;

  clearValsList(): void;
  getValsList(): Array<number>;
  setValsList(value: Array<number>): void;
  addVals(value: number, index?: number): number;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): Info | undefined;
  setInfo(value?: Info): void;

  clearRolesSidList(): void;
  getRolesSidList(): Array<number>;
  setRolesSidList(value: Array<number>): void;
  addRolesSid(value: number, index?: number): number;

  clearMemidsList(): void;
  getMemidsList(): Array<number>;
  setMemidsList(value: Array<number>): void;
  addMemids(value: number, index?: number): number;

  clearTypesList(): void;
  getTypesList(): Array<Relation.MemberTypeMap[keyof Relation.MemberTypeMap]>;
  setTypesList(value: Array<Relation.MemberTypeMap[keyof Relation.MemberTypeMap]>): void;
  addTypes(value: Relation.MemberTypeMap[keyof Relation.MemberTypeMap], index?: number): Relation.MemberTypeMap[keyof Relation.MemberTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Relation.AsObject;
  static toObject(includeInstance: boolean, msg: Relation): Relation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Relation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Relation;
  static deserializeBinaryFromReader(message: Relation, reader: jspb.BinaryReader): Relation;
}

export namespace Relation {
  export type AsObject = {
    id?: number,
    keysList: Array<number>,
    valsList: Array<number>,
    info?: Info.AsObject,
    rolesSidList: Array<number>,
    memidsList: Array<number>,
    typesList: Array<Relation.MemberTypeMap[keyof Relation.MemberTypeMap]>,
  }

  export interface MemberTypeMap {
    NODE: 0;
    WAY: 1;
    RELATION: 2;
  }

  export const MemberType: MemberTypeMap;
}

