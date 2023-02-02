// package: OSMPBF
// file: src/proto/fileformat.proto

import * as jspb from "google-protobuf";

export class Blob extends jspb.Message {
  hasRawSize(): boolean;
  clearRawSize(): void;
  getRawSize(): number | undefined;
  setRawSize(value: number): void;

  hasRaw(): boolean;
  clearRaw(): void;
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): void;

  hasZlibData(): boolean;
  clearZlibData(): void;
  getZlibData(): Uint8Array | string;
  getZlibData_asU8(): Uint8Array;
  getZlibData_asB64(): string;
  setZlibData(value: Uint8Array | string): void;

  hasLzmaData(): boolean;
  clearLzmaData(): void;
  getLzmaData(): Uint8Array | string;
  getLzmaData_asU8(): Uint8Array;
  getLzmaData_asB64(): string;
  setLzmaData(value: Uint8Array | string): void;

  hasObsoleteBzip2Data(): boolean;
  clearObsoleteBzip2Data(): void;
  getObsoleteBzip2Data(): Uint8Array | string;
  getObsoleteBzip2Data_asU8(): Uint8Array;
  getObsoleteBzip2Data_asB64(): string;
  setObsoleteBzip2Data(value: Uint8Array | string): void;

  hasLz4Data(): boolean;
  clearLz4Data(): void;
  getLz4Data(): Uint8Array | string;
  getLz4Data_asU8(): Uint8Array;
  getLz4Data_asB64(): string;
  setLz4Data(value: Uint8Array | string): void;

  hasZstdData(): boolean;
  clearZstdData(): void;
  getZstdData(): Uint8Array | string;
  getZstdData_asU8(): Uint8Array;
  getZstdData_asB64(): string;
  setZstdData(value: Uint8Array | string): void;

  getDataCase(): Blob.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blob.AsObject;
  static toObject(includeInstance: boolean, msg: Blob): Blob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Blob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blob;
  static deserializeBinaryFromReader(message: Blob, reader: jspb.BinaryReader): Blob;
}

export namespace Blob {
  export type AsObject = {
    rawSize?: number,
    raw: Uint8Array | string,
    zlibData: Uint8Array | string,
    lzmaData: Uint8Array | string,
    obsoleteBzip2Data: Uint8Array | string,
    lz4Data: Uint8Array | string,
    zstdData: Uint8Array | string,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    RAW = 1,
    ZLIB_DATA = 3,
    LZMA_DATA = 4,
    OBSOLETE_BZIP2_DATA = 5,
    LZ4_DATA = 6,
    ZSTD_DATA = 7,
  }
}

export class BlobHeader extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): string | undefined;
  setType(value: string): void;

  hasIndexdata(): boolean;
  clearIndexdata(): void;
  getIndexdata(): Uint8Array | string;
  getIndexdata_asU8(): Uint8Array;
  getIndexdata_asB64(): string;
  setIndexdata(value: Uint8Array | string): void;

  hasDatasize(): boolean;
  clearDatasize(): void;
  getDatasize(): number | undefined;
  setDatasize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlobHeader.AsObject;
  static toObject(includeInstance: boolean, msg: BlobHeader): BlobHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlobHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlobHeader;
  static deserializeBinaryFromReader(message: BlobHeader, reader: jspb.BinaryReader): BlobHeader;
}

export namespace BlobHeader {
  export type AsObject = {
    type?: string,
    indexdata: Uint8Array | string,
    datasize?: number,
  }
}

