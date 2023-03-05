export class CRC32 {
    private table: Uint32Array;
    constructor() {
      console.log("LOADED")
      // Initialize the CRC32 table
      this.table = new Uint32Array(256);
      for (let i = 0; i < 256; i++) {
        let crc = i;
        for (let j = 0; j < 8; j++) {
          crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
        }
        this.table[i] = crc;
      }
    }
  
    public compute(data: string,mode?:0|1|undefined): number {
      let crc = 0xffffffff;
      for (let i = 0; i < data.length; i++) {
        crc = this.table[(crc ^ data.charCodeAt(i)) & 0xff] ^ (crc >>> 8);
      }
      if (mode === 0){
        return this.toBinary(crc ^ 0xffffffff);
      }
      if (mode === 1){
        return this.toHex(crc ^ 0xffffffff)
      }
      if(typeof(mode)==="undefined"){
        return crc ^ 0xffffffff
      }
    }
    public compare(data_0:string,data_1:string):boolean{
      return data_0 === data_1
    }
    public toHex(checksum: number): string {
      return checksum.toString(16).padStart(8, "0");
    }
    public toBinary(checksum: number): string {
      return checksum.toString(2).padStart(32, "0");
    }
}