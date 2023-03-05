const es5_crc32 = (function() {for (var t, n = [], e = 0; 256 > e; e++) {t = e;for (var r = 0; 8 > r; r++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;n[e] = t}return function(t) {for (var r = -1, o = 0; o < t.length; o++) r = r >>> 8 ^ n[255 & (r ^ t.charCodeAt(o))];return (4294967295 ^ r) >>> 0}})();
const es6_crc32 = (() => {

  const table = new Uint32Array(256);

  for (let i = 0; i < 256; i++) {

    let c = i;

    for (let k = 0; k < 8; k++) {

      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);

    }

    table[i] = c;

  }

  return (str) => {

    let crc = 0 ^ (-1);

    for (let i = 0; i < str.length; i++) {

      crc = (crc >>> 8) ^ table[(crc ^ str.charCodeAt(i)) & 0xFF];

    }

    return (crc ^ (-1)) >>> 0;

  };

})();

function v1_crc16(data) {

  const polynomial = 0x1021;

 let crc = 0;

  for (let i = 0; i < data.length; i++) {

    let byte = data.charCodeAt(i);

    for (let j = 0; j < 8; j++) {

      let bit = (byte >> (7 - j)) & 1;

      let c15 = (crc >> 15) & 1;

      crc <<= 1;

      if (c15 ^ bit) crc ^= polynomial;

    }

  }

  crc &= 0xffff;

  return crc;

}
function v2_crc16(data) {

  const POLY = 0x1021;

  const INITIAL_VALUE = 0xFFFF;

  let crc = INITIAL_VALUE;

  for (let i = 0; i < data.length; i++) {

    let byte = data.charCodeAt(i);

    for (let j = 0; j < 8; j++) {

      let bit = (byte ^ crc) & 0x0001;

      crc >>= 1;

      if (bit) {

        crc ^= POLY;

      }

      byte >>= 1;

    }

  }

  return crc;

}
function crc16(str) {

  let crc = 0xFFFF;

  for (let i = 0; i < str.length; i++) {

    crc ^= str.charCodeAt(i);

    for (let j = 0; j < 8; j++) {

      crc = (crc & 1) ? ((crc >> 1) ^ 0xA001) : (crc >> 1);

    }

  }

  return crc;

}

 {

  

  for (let i = 0; i < str.length; i++) {

    crc ^= str.charCodeAt(i);

    for (let j = 0; j < 8; j++) {

      crc = (crc & 1) ? ((crc >> 1) ^ 0xA001) : (crc >> 1);

    }

  }ī

  return crc;







console.log("goof")

