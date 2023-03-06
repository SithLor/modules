//@ts-nocheck
//allow to modify the console object
window.console = {
  log: function () { },
  warn: function () { },
  error: function () { },
};


//padstart pollfily
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0;
    padString = String(padString || " ");
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length);
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}
if (!String.prototype.padEnd) {
  String.prototype.padEnd = function padEnd(targetLength, padString) {
    targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
    padString = String(typeof padString !== "undefined" ? padString : " ");
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return String(this) + padString.slice(0, targetLength);
    }
  };
}
//Int8array
if (typeof Int8Array === "undefined") {
  window.Int8Array = function (length) {
    this.length = length;
    this.data = [];
    for (var i = 0; i < length; i++) {
      this.data[i] = 0;
    }
  };
  Int8Array.prototype = {
    get: function (index) {
      return this.data[index];
    },
    set: function (index, value) {
      this.data[index] = value;
    },
  };
}
//Uint8array
if (typeof Uint8Array === "undefined") {
  window.Uint8Array = function (length) {
    this.length = length;
    this.data = [];
    for (var i = 0; i < length; i++) {
      this.data[i] = 0;
    }
  }
  Uint8Array.prototype = {
    get: function (index) {
      return this.data[index];
    },
    set: function (index, value) {
      this.data[index] = value;
    },
  };
}
//Int16array
if (typeof Int16Array === "undefined") {
  window.Int16Array = function (length) {
    this.length = length;
    this.data = [];
    for (var i = 0; i < length; i++) {
      this.data[i] = 0;
    }
  };
  Int16Array.prototype = {
    get: function (index) {
      return this.data[index];
    },
    set: function (index, value) {
      this.data[index] = value;
    },
  };
}
if (typeof Int32Array === "undefined") {
  window.Int32Array = function (length) {
    this.length = length;
    this.data = [];
    for (var i = 0; i < length; i++) {
      this.data[i] = 0;
    }
  }
  Int32Array.prototype = {
    get: function (index) {
      return this.data[index];
    },
    set: function (index, value) {
      this.data[index] = value;
    },
  };
}
//Uint16array
if (typeof Uint16Array === "undefined") {
  window.Uint16Array = function (length) {
    this.length = length;
    this.data = [];
    for (var i = 0; i < length; i++) {
      this.data[i] = 0;
    }
  };
  Uint16Array.prototype = {
    get: function (index) {
      return this.data[index];
    },
    set: function (index, value) {
      this.data[index] = value;
    },
  };
}
//Uint32array
if (typeof Uint32Array === "undefined") {
  window.Uint32Array = function (length) {
    this.length = length;
    this.data = [];
    for (var i = 0; i < length; i++) {
      this.data[i] = 0;
    }
  };
  Uint32Array.prototype = {
    get: function (index) {
      return this.data[index];
    },
    set: function (index, value) {
      this.data[index] = value;
    },
  };
}
