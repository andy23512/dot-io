import {
  _keyMapDefaults,
  _keyMap,
  _chordMaps,
  _chordLayout,
  actionMap,
  oldAsciiKeyReplacementDictionary
} from "./maps.js";
import hex2Bin from "../../../../snowpack/pkg/hex-to-bin.js";
import React from "../../../../snowpack/pkg/react.js";
export class MainControls {
}
MainControls.abortController1 = new AbortController();
MainControls.abortController2 = new AbortController();
MainControls._chordmapId = "Default";
MainControls._chordmapCountOnDevice = 50;
MainControls._firmwareVersion = "0";
MainControls._chordMapIdCounter = 0;
MainControls.count = 0;
MainControls.CONFIG_ID_ENABLE_SERIAL_LOG = "01";
MainControls.CONFIG_ID_ENABLE_SERIAL_RAW = "02";
MainControls.CONFIG_ID_ENABLE_SERIAL_CHORD = "03";
MainControls.CONFIG_ID_ENABLE_SERIAL_KEYBOARD = "04";
MainControls.CONFIG_ID_ENABLE_SERIAL_MOUSE = "05";
MainControls.CONFIG_ID_ENABLE_SERIAL_DEBUG = "06";
MainControls.CONFIG_ID_ENABLE_SERIAL_HEADER = "07";
MainControls.CONFIG_ID_ENABLE_HID_KEYBOARD = "0A";
MainControls.CONFIG_ID_PRESS_THRESHOLD = "0B";
MainControls.CONFIG_ID_RELEASE_THRESHOLD = "0C";
MainControls.CONFIG_ID_ENABLE_HID_MOUSE = "14";
MainControls.CONFIG_ID_SCROLL_DELAY = "15";
MainControls.CONFIG_ID_ENABLE_SPURRING = "1E";
MainControls.CONFIG_ID_SPUR_KILLER_TOGGLE = "1F";
MainControls.CONFIG_ID_SPUR_KILLER = "20";
MainControls.CONFIG_ID_ENABLE_CHORDING = "28";
MainControls.CONFIG_ID_CHAR_KILLER_TOGGLE = "29";
MainControls.CONFIG_ID_CHAR_COUNTER_KILLER = "2A";
const BaseLevelSpecialCharactersLibrary = {
  "2D": "-",
  "2E": "=",
  "2F": "[",
  "30": "]",
  "31": "'",
  "32": "#",
  "33": ";",
  "34": "'",
  "35": "`",
  "36": ",",
  "37": ".",
  "38": "/"
};
const ModifierCharactersLibrary = {
  KEY_1: "!",
  KEY_2: "@",
  KEY_3: "#",
  KEY_4: "$",
  KEY_5: "%",
  KEY_6: "^",
  KEY_7: "&",
  KEY_8: "*",
  KEY_9: "(",
  KEY_0: ")",
  KSC_2C: "Space",
  KSC_2D: "_",
  KSC_2E: "+",
  KSC_2F: "{",
  KSC_30: "}",
  KSC_31: "|",
  KSC_32: "~",
  KSC_33: ":",
  KSC_34: '"',
  KSC_35: "~",
  KSC_36: "<",
  KSC_37: ">",
  KSC_38: "?"
};
const ReverseModifierCharactersLibrary = {
  "!": 286,
  "@": 287,
  "#": 288,
  $: 289,
  "%": 290,
  "^": 291,
  "&": 292,
  "*": 293,
  "(": 294,
  ")": 295,
  " ": 300,
  _: 301,
  "-": 301,
  "+": 302,
  "=": 302,
  "{": 303,
  "[": 303,
  "]": 304,
  "}": 304,
  "|": 305,
  ":": 307,
  ";": 307,
  '"': 308,
  "'": 308,
  "~": 309,
  "`": 309,
  "<": 310,
  ",": 310,
  ">": 311,
  ".": 311,
  "?": 312
};
const ReverseLookUpTable = {
  KSC_00: 256,
  KSC_01: 257,
  KSC_02: 258,
  KSC_03: 259,
  KEY_A: 260,
  KEY_B: 261,
  KEY_C: 262,
  KEY_D: 263,
  KEY_E: 264,
  KEY_F: 265,
  KEY_G: 266,
  KEY_H: 267,
  KEY_I: 268,
  KEY_J: 269,
  KEY_K: 270,
  KEY_L: 271,
  KEY_M: 272,
  KEY_N: 273,
  KEY_O: 274,
  KEY_P: 275,
  KEY_Q: 276,
  KEY_R: 277,
  KEY_S: 278,
  KEY_T: 279,
  KEY_U: 280,
  KEY_V: 281,
  KEY_W: 282,
  KEY_X: 283,
  KEY_Y: 284,
  KEY_Z: 285,
  KEY_1: 286,
  KEY_2: 287,
  KEY_3: 288,
  KEY_4: 289,
  KEY_5: 290,
  KEY_6: 291,
  KEY_7: 292,
  KEY_8: 293,
  KEY_9: 294,
  KEY_0: 295,
  ENTER: 296,
  ESC: 297,
  BKSP: 298,
  TAB: 299,
  " ": 300,
  KSC_2D: 301,
  KSC_2E: 302,
  KSC_2F: 303,
  KSC_30: 304,
  KSC_31: 305,
  KSC_32: 306,
  KSC_33: 307,
  KSC_34: 308,
  KSC_35: 309,
  KSC_36: 310,
  KSC_37: 311,
  KSC_38: 312,
  CAPSLOCK: 313,
  F1: 314,
  F2: 315,
  F3: 316,
  F4: 317,
  F5: 318,
  F6: 319,
  F7: 320,
  F8: 321,
  F9: 322,
  F10: 323,
  F11: 324,
  F12: 325,
  PRTSCN: 326,
  SCRLK: 327,
  PAUSE: 328,
  INSERT: 329,
  HOME: 330,
  PGUP: 331,
  DELETE: 332,
  END: 333,
  PGDN: 334,
  ARROW_RT: 335,
  ARROW_LF: 336,
  ARROW_DN: 337,
  ARROW_UP: 338,
  NUMLOCK: 339,
  KP_SLASH: 340,
  KP_ASTER: 341,
  KP_MINUS: 342,
  KP_PLUS: 343,
  KP_ENTER: 344,
  KP_1: 345,
  KP_2: 346,
  KP_3: 347,
  KP_4: 348,
  KP_5: 349,
  KP_6: 350,
  KP_7: 351,
  KP_8: 352,
  KP_9: 353,
  KP_0: 354,
  KP_DOT: 355,
  F13: 360,
  F14: 361,
  F15: 362,
  F16: 363,
  F17: 364,
  F18: 365,
  F19: 366,
  F20: 367,
  F21: 368,
  F22: 369,
  F23: 370,
  F24: 371,
  EXECUTE: 372,
  HELP: 373,
  KSC_86: 390,
  KSC_B0: 432,
  LEFT_CTRL: 512,
  LEFT_SHIFT: 513,
  LEFT_ALT: 514,
  LEFT_GUI: 515,
  RIGHT_CTRL: 516,
  RIGHT_SHIFT: 517,
  RIGHT_ALT: 518,
  RIGHT_GUI: 519,
  DUP: 536
};
function compare(a, b) {
  if (a === b) {
    return 0;
  }
  const a_components = a.split(".");
  const b_components = b.split(".");
  const len = Math.min(a_components.length, b_components.length);
  for (let i = 0; i < len; i++) {
    if (parseInt(a_components[i]) > parseInt(b_components[i])) {
      return 1;
    }
    if (parseInt(a_components[i]) < parseInt(b_components[i])) {
      return -1;
    }
  }
  if (a_components.length > b_components.length) {
    return 1;
  }
  if (a_components.length < b_components.length) {
    return -1;
  }
  return 0;
}
export async function selectBase() {
  await sendCommandString("SELECT BASE");
  await readGetOneAndToss();
}
export async function sendCommandString(commandString) {
  console.log(commandString);
  if (MainControls.serialPort) {
    const encoder = new TextEncoder();
    const writer = MainControls.serialPort.writable.getWriter();
    await writer.write(encoder.encode(commandString + "\r\n"));
    writer.releaseLock();
    console.log("writing " + commandString + "\r\n");
  } else {
    console.log("serial port is not open yet");
  }
}
export async function readGetOneAndToss() {
  const {value, done} = await MainControls.lineReader.read().catch(console.error);
  if (value) {
    console.log("toss value of: " + value);
  } else {
    console.log("value is null");
  }
}
export async function readGetOneAndTossCommitAll(virtualId) {
  const myTimeout = await setTimeout(pressCommitButton, 1e4, virtualId);
  const {value, done} = await MainControls.lineReader.read().catch(console.error);
  if (value) {
    console.log("toss value of: " + value);
  } else {
    console.log("value is null");
  }
  clearTimeout(myTimeout);
}
export async function readGetOneAndReturnOne() {
  const {value, done} = await MainControls.lineReader.read().catch(console.error);
  if (value) {
    console.log("RESPONSE " + value);
    return value;
  } else {
    console.log("value is null");
  }
}
export async function selectConfig() {
  await sendCommandString("SELECT CONFIG");
  await readGetOneAndToss();
}
export async function readGetChordmapCount() {
  const {value, done} = await MainControls.lineReader.read();
  if (value) {
    MainControls._chordmapCountOnDevice = parseInt(value);
    console.log(MainControls._chordmapCountOnDevice);
  }
}
export async function enableSerialChordOutput(val) {
  console.log("enableSerialChordOutput(" + val.toString() + ")");
  await selectConfig();
  if (val == true) {
    await sendCommandString("SET " + MainControls.CONFIG_ID_ENABLE_SERIAL_CHORD + " 01");
    await sendCommandString("SET " + MainControls.CONFIG_ID_ENABLE_HID_KEYBOARD + " 00");
    await sendCommandString("SET " + MainControls.CONFIG_ID_ENABLE_HID_MOUSE + " 00");
  } else {
    await sendCommandString("SET " + MainControls.CONFIG_ID_ENABLE_SERIAL_CHORD + " 00");
    await sendCommandString("SET " + MainControls.CONFIG_ID_ENABLE_HID_KEYBOARD + " 01");
    await sendCommandString("SET " + MainControls.CONFIG_ID_ENABLE_HID_MOUSE + " 01");
  }
  await selectBase();
}
export async function cancelReader() {
  if (MainControls.serialPort) {
    if (MainControls.lineReader) {
      await MainControls.lineReader.cancel().then(() => {
        console.log("cleared line reader");
      });
      console.log(MainControls.abortController1);
      await MainControls.abortController1.abort();
      console.log(MainControls.serialPort.readable);
      await MainControls.lineReaderDone.catch(() => {
      });
    }
  }
}
function ReplaceAt(input, search, replace2, start, end) {
  return input.slice(0, start) + input.slice(start, end).replace(search, replace2) + input.slice(end);
}
function replaceAt(index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
export function convertHexadecimalPhraseToAsciiString(hexString) {
  let asciiString = "";
  const tempCharacterSet = [];
  if (Hex2Dec(hexString.substr(0, 2)) <= 32) {
    for (let i = 0; i < hexString.length; i += 4) {
      const tempASI = actionMap[parseInt(hexString.substr(i, 4), 16)]?.split("_")?.pop();
      if (BaseLevelSpecialCharactersLibrary[tempASI] == void 0) {
        asciiString += tempASI;
      } else {
        asciiString += BaseLevelSpecialCharactersLibrary[tempASI];
      }
      console.log(actionMap[parseInt(hexString.substr(i, 4), 16)]);
      tempCharacterSet.push(actionMap[parseInt(hexString.substr(i, 4), 16)]);
    }
    asciiString = asciiString.toLocaleLowerCase();
    console.log("tempCharacterSet array 1 " + tempCharacterSet);
  } else {
    for (let i = 0; i < hexString.length; i += 2) {
      const tempASI = actionMap[parseInt(hexString.substr(i, 2), 16)]?.split("_")?.pop();
      if (BaseLevelSpecialCharactersLibrary[tempASI] == void 0) {
        asciiString += tempASI;
        tempCharacterSet.push(actionMap[parseInt(hexString.substr(i, 2), 16)]);
      } else {
        asciiString += BaseLevelSpecialCharactersLibrary[tempASI];
        tempCharacterSet.push(actionMap[parseInt(hexString.substr(i, 2), 16)]);
      }
      console.log(actionMap[parseInt(hexString.substr(i, 2), 16)]);
    }
    console.log("tempCharacterSet array 2 " + tempCharacterSet);
  }
  if (tempCharacterSet.includes("LEFT_SHIFT") || tempCharacterSet.includes("RIGHT_SHIFT")) {
    const numberOfShiftOccurences = tempCharacterSet.map((element, index) => element === "LEFT_SHIFT" ? index : -1).filter((element) => element !== -1);
    if (numberOfShiftOccurences.length >= 2) {
      let startModifierWork = false;
      let changedSection = "";
      numberOfShiftOccurences;
      let nextShiftPositionIncrement = 0;
      for (let y = 0; y < tempCharacterSet.length; y++) {
        if (tempCharacterSet[y] == "LEFT_SHIFT" && !startModifierWork) {
          startModifierWork = true;
          tempCharacterSet.splice(y, 1);
          nextShiftPositionIncrement++;
          console.log("Entered the first shift i, Y-index" + y);
        } else if (tempCharacterSet[y] == "LEFT_SHIFT" && startModifierWork && y == numberOfShiftOccurences[nextShiftPositionIncrement] - nextShiftPositionIncrement) {
          startModifierWork = false;
          tempCharacterSet.splice(y, 1);
          console.log("Entered the first shift else if");
          nextShiftPositionIncrement++;
        }
        if (startModifierWork) {
          if (ModifierCharactersLibrary[tempCharacterSet[y]] == void 0) {
            changedSection += tempCharacterSet[y]?.split("_")?.pop().toUpperCase();
          } else if (ModifierCharactersLibrary[tempCharacterSet[y]] != void 0) {
            changedSection += ModifierCharactersLibrary[tempCharacterSet[y]];
          }
        }
        if (!startModifierWork && tempCharacterSet[y] != void 0) {
          changedSection += tempCharacterSet[y]?.split("_")?.pop().toLocaleLowerCase();
        }
        console.log("Position values at each step " + changedSection.split(",") + " TempCharacter Set " + tempCharacterSet);
      }
      console.log("new stuff " + changedSection.split(","));
      asciiString = changedSection.split(",");
    }
  }
  console.log(asciiString);
  return asciiString;
}
async function readGetSomeChordmaps(expectedLineCount = 100) {
  console.log("readGetSome(" + expectedLineCount + ")");
  let i = 0;
  const checker = true;
  while (checker) {
    const {value} = await MainControls.lineReader.read();
    i++;
    if (value) {
      const arrValue = [...value];
      const strValue = String(arrValue.join(""));
      console.log(strValue);
      const hexChordString = strValue[2];
      const hexAsciiString = strValue.substr(17, strValue.length);
      const strValues = ["", "", "", ""];
      strValues[0] = convertHexadecimalChordToHumanChord(hexChordString);
      strValues[1] = convertHexadecimalPhraseToAsciiString(hexAsciiString);
      strValues[2] = hexChordString;
      strValues[3] = hexAsciiString;
      console.log(strValues);
      _chordMaps.push([
        convertHexadecimalChordToHumanString(hexChordString),
        strValues[1]
      ]);
      appendToRow(strValues);
    }
    if (i >= expectedLineCount) {
      break;
    }
  }
}
export async function readGetHexChord() {
  let hexChordString = "";
  if (MainControls.serialPort) {
    if (MainControls._chordmapId == "CHARACHORDER" && compare(MainControls._firmwareVersion, "0.9.0") == -1) {
      await readGetOneAndToss();
      console.log("i did indeed enter here");
    }
    const {value, done} = await MainControls.lineReader.read();
    if (done) {
      console.log("reader is done");
    } else {
      console.log(["value", value]);
      if (value) {
        const arrValue = [...value];
        const strValue = String(arrValue.join(""));
        console.log(strValue);
        hexChordString = strValue.substr(0, 16);
        await readGetOneAndToss();
      }
    }
  }
  return hexChordString;
}
export function convertHexadecimalChordToHumanString(hexString) {
  let humanString = "";
  console.log(hexString);
  if (hexString.length <= 0) {
    hexString = "00";
  }
  const bigNum = BigInt("0x" + hexString);
  if (MainControls._chordmapId == "CHARACHORDER") {
    const decString = String(bigNum).split("");
    console.log(decString);
    console.log(MainControls._chordmapId);
    for (let i = 0; i < decString.length; i++) {
      if (decString[i] != "0") {
        if (humanString.length > 0) {
          humanString += " + ";
        }
        console.log({
          i,
          "decString[i]": decString[i],
          "decString.length": decString.length,
          decString,
          "10exp": decString.length - i - 1,
          decChordComp: decString[i] * 10 ** (decString.length - i - 1),
          noteId: chord_to_noteId(decString[i] * 10 ** (decString.length - i - 1))
        });
        let noteId;
        let actionId;
        if (decString[i] % 2 == 1) {
          noteId = chord_to_noteId(decString[i] * 10 ** (decString.length - i - 1));
          actionId = _keyMapDefaults[0][noteId];
          if (actionId == 0) {
            actionId = 512 + noteId;
          }
          humanString += actionMap[actionId];
        } else {
          noteId = chord_to_noteId((decString[i] - 1) * 10 ** (decString.length - i - 1));
          actionId = _keyMapDefaults[0][noteId];
          if (actionId == 0) {
            actionId = 512 + noteId;
          }
          humanString += actionMap[actionId];
          humanString += " + ";
          noteId = chord_to_noteId(1 * 10 ** (decString.length - i - 1));
          actionId = _keyMapDefaults[0][noteId];
          if (actionId == 0) {
            actionId = 512 + noteId;
          }
          humanString += actionMap[actionId];
        }
      }
      if (humanString.indexOf("m + k") != -1 || humanString.indexOf("m + k") != 0) {
        humanString = humanString.replace("m + k", "m + c");
      }
    }
  } else if (MainControls._chordmapId == "CHARACHORDERLITE") {
    console.log("ChordLite " + bigNum);
    const binString = bigNum.toString(2);
    console.log(binString);
    for (let i = 0; i < binString.length; i++) {
      if (binString[i] == "1") {
        if (humanString.length > 0) {
          humanString += " + ";
        }
        humanString += _keyMap[64 - binString.length + i];
        if (_keyMap[64 - binString.length + i] == "GTM" || _keyMap[64 - binString.length + i] == "0x0061") {
          console.log("The two values " + _keyMap[64 - binString.length + i]);
        }
      }
    }
  } else {
    console.log("ChordLite " + bigNum);
    const binString = bigNum.toString(2);
    console.log(binString);
    for (let i = 0; i < binString.length; i++) {
      if (binString[i] == "1") {
        if (humanString.length > 0) {
          humanString += " + ";
        }
        humanString += _keyMap[64 - binString.length + i];
        if (_keyMap[64 - binString.length + i] == "GTM" || _keyMap[64 - binString.length + i] == "0x0061") {
          console.log("The two values " + _keyMapDefaults[64 - binString.length + i]);
        }
      }
    }
  }
  console.log(humanString);
  return humanString;
}
function checkBin(n) {
  return /^[01]{1,64}$/.test(n);
}
function checkDec(n) {
  return /^[0-9]{1,64}$/.test(n);
}
function checkHex(n) {
  return /^[0-9A-Fa-f]{1,64}$/.test(n);
}
function pad(s, z) {
  s = "" + s;
  return s.length < z ? pad("0" + s, z) : s;
}
function unpad(s) {
  s = "" + s;
  return s.replace(/^0+/, "");
}
function backpad(s, z) {
  s = "" + s;
  return s.length < z ? backpad(s + "0", z) : s;
}
function Dec2Bin(n) {
  if (!checkDec(n) || n < 0)
    return 0;
  return n.toString(2);
}
function Dec2Hex(n) {
  if (!checkDec(n) || n < 0)
    return 0;
  return n.toString(16);
}
function Bin2Dec(n) {
  if (!checkBin(n))
    return 0;
  return parseInt(n, 2).toString(10);
}
function Bin2Hex(n) {
  if (!checkBin(n))
    return 0;
  return parseInt(n, 2).toString(16);
}
function Hex2Dec(n) {
  if (!checkHex(n))
    return 0;
  return parseInt(n, 16).toString(10);
}
export function convertHexadecimalChordToHumanChordForAllChordsTier(hexChord) {
  const humanChord = [];
  const binChord = pad(hex2Bin(hexChord), 128);
  console.log(hexChord);
  console.log(binChord);
  const chainIndex = binChord.substring(0, 8);
  for (let i = 0; i < 12; i++) {
    const binAction = binChord.substring(8 + i * 10, 8 + (i + 1) * 10);
    const actionCode = Bin2Dec(binAction);
    if (actionCode != 0) {
      console.log("this is actionMap output " + actionMap[actionCode]);
      const humanStringPart = replaceOldAsciiKeys(actionMap[actionCode]);
      humanChord.push(humanStringPart);
    } else {
      break;
    }
  }
  console.log("final humanChord " + humanChord);
  return humanChord;
}
export function convertHexadecimalChordToHumanChord(hexChord) {
  let humanChord = "";
  const binChord = pad(hex2Bin(hexChord), 128);
  console.log(hexChord);
  console.log(binChord);
  const chainIndex = binChord.substring(0, 8);
  for (let i = 0; i < 12; i++) {
    const binAction = binChord.substring(8 + i * 10, 8 + (i + 1) * 10);
    const actionCode = Bin2Dec(binAction);
    if (actionCode != 0) {
      if (humanChord.length > 0) {
        humanChord += " + ";
      }
      const humanStringPart = replaceOldAsciiKeys(actionMap[actionCode]);
      humanChord += humanStringPart?.split("_")?.pop();
    } else {
      break;
    }
  }
  console.log("final humanChord " + humanChord);
  return humanChord;
}
export function chord_to_noteId(chord) {
  const part1 = 5 * Math.floor(Math.log10(chord));
  const part2 = Math.floor(chord / 10 ** Math.floor(Math.log10(chord)) + 1) / 2;
  const part3 = Math.log10(chord);
  const full = Math.floor(5 * Math.floor(Math.log10(chord)) + Math.floor(chord / 10 ** Math.floor(Math.log10(chord)) + 1) / 2);
  console.log([chord, part1, part2, part3, full]);
  return full;
}
export async function setupLineReader() {
  if (MainControls.serialPort) {
    console.log("setupLineReader()");
    const decoder = new TextDecoderStream();
    MainControls.abortController1 = new AbortController();
    MainControls.abortController2 = new AbortController();
    MainControls.lineReaderDone = MainControls.serialPort.readable.pipeTo(decoder.writable, {preventAbort: true, signal: MainControls.abortController1.signal});
    const inputStream = decoder.readable.pipeThrough(new TransformStream(new LineBreakTransformer(), {
      signal: MainControls.abortController2.signal
    }));
    MainControls.lineReader = await inputStream.getReader();
    console.log("setup line reader");
    document.getElementById("statusDiv").innerHTML = "status: opened serial port and listening";
  } else {
    console.log("serial port is not open yet");
  }
}
class LineBreakTransformer {
  constructor() {
    this.chunks = "";
  }
  transform(chunk, controller) {
    this.chunks += chunk;
    const lines = this.chunks.split("\r\n");
    this.chunks = lines.pop();
    lines.forEach((line) => controller.enqueue(line));
  }
  flush(controller) {
    controller.enqueue(this.chunks);
  }
}
export function appendToList(str) {
  const ul = document.getElementById("list");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(str[0] + " " + str[1]));
  ul.appendChild(li);
}
export function ascii_to_hexa(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i].charCodeAt(0)).toString(16);
  }
}
export function convertKeyPostionsHumanPosition(inPosition) {
  return inPosition?.split("_")?.pop();
}
export function convertHumanPositionToScanCodeKeyPosition(inPosition) {
  return tryItAll(inPosition);
}
export function tryItAll(character) {
  const variations = ["KEY_", "KSC_", "ARROW_", "KP_", "VOL_"];
  if (ReverseLookUpTable[character] != void 0) {
    return actionMap.indexOf(character);
  } else if (ReverseModifierCharactersLibrary[character] != void 0) {
    return ReverseModifierCharactersLibrary[character];
  } else {
    for (let y = 0; y < variations.length; y++) {
      if (ReverseLookUpTable[variations[y] + character]) {
        return ReverseLookUpTable[variations[y] + character];
      }
    }
    return;
  }
}
export function convertHumanStringToHexadecimalPhrase(humanString) {
  let hexString = "";
  if (MainControls._chordmapId == "ID CHARACHORDER X S2") {
    const variations = ["KEY_", "KSC_", "ARROW_", "KP_", "VOL_"];
    let shouldModBeTrue = false;
    const leftShiftValue = DecimalHexTwosComplement(ReverseLookUpTable["LEFT_SHIFT"]);
    const numberOfshifts = (humanString.match(new RegExp(leftShiftValue, "g")) || []).length;
    for (let i = 0; i < humanString.length; i++) {
      if (ReverseLookUpTable[humanString[i].toUpperCase()] != void 0 && humanString[i] != humanString[i].toUpperCase()) {
        !shouldModBeTrue && numberOfshifts ? [shouldModBeTrue = true, hexString += leftShiftValue] : "";
        hexString += DecimalHexTwosComplement(actionMap.indexOf(humanString[i].toUpperCase()));
      } else if (humanString[i] == humanString[i].toUpperCase()) {
        !shouldModBeTrue && numberOfshifts ? [shouldModBeTrue = true, hexString += leftShiftValue] : "";
        for (let y = 0; y < variations.length; y++) {
          if (ReverseLookUpTable[variations[y] + humanString[i].toUpperCase()]) {
            hexString += DecimalHexTwosComplement(ReverseLookUpTable[variations[y] + humanString[i].toUpperCase()]);
          }
        }
      } else if (ReverseModifierCharactersLibrary[humanString[i].toUpperCase()] != void 0) {
        !shouldModBeTrue ? [shouldModBeTrue = false, hexString += leftShiftValue] : "";
        hexString += DecimalHexTwosComplement(actionMap.indexOf(humanString[i].toUpperCase()));
      } else {
        for (let y = 0; y < variations.length; y++) {
          if (ReverseLookUpTable[variations[y] + humanString[i].toUpperCase()]) {
            shouldModBeTrue ? [shouldModBeTrue = false, hexString += leftShiftValue] : "";
            hexString += DecimalHexTwosComplement(ReverseLookUpTable[variations[y] + humanString[i].toUpperCase()]);
          }
        }
      }
    }
  } else {
    for (let i = 0; i < humanString.length; i++) {
      const hex = Number(humanString.charCodeAt(i)).toString(16);
      hexString += hex;
    }
    hexString = hexString.toUpperCase();
  }
  console.log(hexString);
  return hexString;
}
function DecimalHexTwosComplement(decimal) {
  const size = 2;
  if (decimal >= 0) {
    let hexadecimal = decimal.toString(16);
    while (hexadecimal.length % size != 0) {
      hexadecimal = "" + 0 + hexadecimal;
    }
    return hexadecimal;
  } else {
    let hexadecimal = Math.abs(decimal).toString(16);
    while (hexadecimal.length % size != 0) {
      hexadecimal = "" + 0 + hexadecimal;
    }
    let output = "";
    for (let i = 0; i < hexadecimal.length; i++) {
      output += (15 - parseInt(hexadecimal[i], 16)).toString(16);
    }
    output = (1 + parseInt(output, 16)).toString(16);
    return output;
  }
}
function replaceOldAsciiKeys(inputKey) {
  inputKey = inputKey.split(" + ");
  let finishedInputKey = "";
  for (let i = 0; i < inputKey.length; i++) {
    if (oldAsciiKeyReplacementDictionary.hasOwnProperty(inputKey[i])) {
      finishedInputKey += oldAsciiKeyReplacementDictionary[inputKey[i]];
      console.log("OldAsciiReplacement " + finishedInputKey);
    } else {
      finishedInputKey += inputKey[i];
    }
    if (inputKey.length - 1 > 0 && i != inputKey.length - 1) {
      finishedInputKey += " + ";
    }
  }
  return finishedInputKey;
}
export function convertHumanStringToHexadecimalChord(humanString) {
  console.log(humanString);
  let hexString = "";
  let bigNum = BigInt(0);
  const humanStringParts = humanString.split(" + ");
  console.log("these are the parts " + humanStringParts);
  humanStringParts.forEach(async (part) => {
    part = replaceOldAsciiKeys(part);
    console.log("This is the part " + part);
    const actionId = actionMap.indexOf(part);
    console.log("ActionID: " + actionId);
    if (MainControls._chordmapId == "CHARACHORDER") {
      let keyId;
      if (actionId < 512) {
        keyId = _keyMapDefaults[0].indexOf(actionId);
        console.log(keyId);
      } else {
        keyId = actionId - 512;
      }
      console.log(keyId);
      bigNum += BigInt(noteId_to_chord(keyId));
      console.log(bigNum);
    } else if (MainControls._chordmapId == "CHARACHORDERLITE") {
      let keyId;
      if (actionId < 512) {
        console.log("I am here");
        keyId = _keyMapDefaults[1].indexOf(actionMap[actionId]);
        console.log(keyId);
      } else {
        keyId = actionId - 512;
      }
      console.log(keyId);
      bigNum += BigInt(2n ** BigInt(keyId));
      console.log(bigNum);
    } else {
    }
  });
  console.log(bigNum);
  hexString = bigNum.toString(16).toUpperCase();
  hexString = "0".repeat(16 - hexString.length) + hexString;
  console.log(hexString);
  return hexString;
}
export function noteId_to_chord(note) {
  return BigInt(2 * ((note - 1) % 5) + 1) * BigInt(10) ** BigInt(Math.floor((note - 1) / 5));
}
export async function readGetOneChordmap() {
  console.log("readGetOneChordmap()");
  const {value} = await MainControls.lineReader.read();
  const splitter = value.split(" ");
  console.log(splitter);
  const strValues = ["", "", "", ""];
  if (value) {
    const arrValue = [...splitter];
    const strValue = arrValue;
    let hexChordString = "";
    hexChordString = strValue[3];
    let hexAsciiString = "";
    hexAsciiString = strValue[4];
    strValues[0] = convertHexadecimalChordToHumanChord(hexChordString);
    strValues[1] = convertHexadecimalPhraseToAsciiString(hexAsciiString);
    strValues[2] = hexChordString;
    strValues[3] = hexAsciiString;
    _chordMaps.push([
      convertHexadecimalPhraseToAsciiString(hexChordString),
      strValues[1]
    ]);
  }
  return strValues;
}
export async function commitChordLayout() {
  console.log("readGetOneChordMapLayout()");
  const {value} = await MainControls.lineReader.read();
  console.log("Chord layout array " + value);
  if (value) {
    const arrValue = [...value];
    const strValue = String(arrValue.join(""));
    console.log(strValue);
    let hexChordString = "";
    hexChordString = strValue.substr(0, 16);
    let hexAsciiString = "";
    hexAsciiString = strValue.substr(17, strValue.length);
    const strValues = ["", "", "", ""];
    const myArray = value.split(" ");
    strValues[0] = myArray[1];
    strValues[1] = myArray[2];
    strValues[2] = myArray[3];
    strValues[3] = myArray[4];
    strValues[4] = myArray[5];
    strValues[5] = myArray[6];
    _chordLayout.push(value);
    appendLayoutToRow(strValues);
  }
}
export async function readGetOneChordLayout() {
  console.log("readGetOneChordMapLayout()");
  const {value} = await MainControls.lineReader.read();
  console.log("Chord layout array " + value);
  const strValues = ["", "", "", ""];
  if (value) {
    const arrValue = [...value];
    const strValue = String(arrValue.join(""));
    console.log(strValue);
    let hexChordString = "";
    hexChordString = strValue.substr(0, 16);
    let hexAsciiString = "";
    hexAsciiString = strValue.substr(17, strValue.length);
    const myArray = value.split(" ");
    strValues[0] = myArray[1];
    strValues[1] = myArray[2];
    strValues[2] = myArray[3];
    strValues[3] = myArray[4];
    strValues[4] = myArray[5];
    strValues[5] = myArray[6];
    _chordLayout.push(value);
  }
  return strValues;
}
export function appendLayoutToRow(data2, isFromFile = false) {
  if (data2[4] != "2") {
    const dataTable2 = document.getElementById("layoutDataTable");
    const row = dataTable2.insertRow(-1);
    const cells = [];
    cells.push(row.insertCell(-1));
    cells.push(row.insertCell(-1));
    cells.push(row.insertCell(-1));
    cells.push(row.insertCell(-1));
    cells.push(row.insertCell(-1));
    cells.push(row.insertCell(-1));
    cells.push(row.insertCell(-1));
    cells.push(row.insertCell(-1));
    cells.push(row.insertCell(-1));
    cells.push(row.insertCell(-1));
    cells.push(row.insertCell(-1));
    const chordTextOrig = document.createElement("div");
    const phraseTextOrig = document.createElement("div");
    const chordTextNew = document.createElement("div");
    const phraseTextInput = document.createElement("div");
    const virtualId = MainControls._chordMapIdCounter;
    console.log("ChordMap Counter: " + virtualId);
    cells[0].innerHTML = virtualId;
    cells[0].setAttribute("style", "border: 1px solid #D3D3D3;");
    MainControls._chordMapIdCounter++;
    chordTextOrig.id = virtualId.toString() + "-chordorig";
    chordTextOrig.innerHTML = data2[1];
    cells[2].appendChild(chordTextOrig);
    cells[2].setAttribute("style", "border: 1px solid #D3D3D3;");
    phraseTextOrig.id = virtualId.toString() + "-phraseorig";
    phraseTextOrig.innerHTML = data2[2];
    cells[3].appendChild(phraseTextOrig);
    cells[3].setAttribute("style", "border: 1px solid #D3D3D3;");
    chordTextNew.id = virtualId.toString() + "-chordnew";
    chordTextNew.innerHTML = data2[3];
    cells[4].appendChild(chordTextNew);
    cells[4].setAttribute("style", "border: 1px solid #D3D3D3; ");
    phraseTextInput.onchange = function() {
      const element = document.getElementById(virtualId.toString() + "-commit");
      element.disabled = false;
    };
    if (isFromFile) {
      phraseTextInput.value = data2[1];
    }
  }
}
export function appendToRow(data2, isFromFile = false) {
  const dataTable2 = document.getElementById("dataTable");
  const row = dataTable2.insertRow(-1);
  const cells = [];
  cells.push(row.insertCell(-1));
  cells.push(row.insertCell(-1));
  cells.push(row.insertCell(-1));
  cells.push(row.insertCell(-1));
  cells.push(row.insertCell(-1));
  cells.push(row.insertCell(-1));
  cells.push(row.insertCell(-1));
  cells.push(row.insertCell(-1));
  cells.push(row.insertCell(-1));
  cells.push(row.insertCell(-1));
  cells.push(row.insertCell(-1));
  const btnEdit = document.createElement("input");
  const chordTextOrig = document.createElement("div");
  const phraseTextOrig = document.createElement("div");
  const chordTextNew = document.createElement("div");
  const phraseTextInput = document.createElement("input");
  const btnDelete = document.createElement("input");
  const btnRevert = document.createElement("input");
  const btnCommit = document.createElement("input");
  const virtualId = MainControls._chordMapIdCounter;
  console.log("ChordMap Counter: " + virtualId);
  cells[0].innerHTML = virtualId;
  cells[0].setAttribute("style", "border: 1px solid #D3D3D3;");
  MainControls._chordMapIdCounter++;
  btnEdit.id = virtualId.toString() + "-edit";
  btnEdit.type = "button";
  btnEdit.className = "buttonEdit";
  btnEdit.value = "edit chord";
  btnEdit.setAttribute("style", "background-color: #4CAF50;border: 1px solid white; color: white;padding: 1px 15px;text-align: center;text-decoration: none;display: inline-block; font-size: 16px;");
  cells[1].appendChild(btnEdit);
  cells[1].setAttribute("style", "border: 1px solid #D3D3D3;");
  btnEdit.onclick = async function() {
    const btn = document.getElementById(virtualId.toString() + "-edit");
    if (btn.value == "edit chord") {
      btn.value = "listening";
      await enableSerialChordOutput(true);
      const hexChord = await readGetHexChord();
      console.log("Listening Hex Chord " + convertHexadecimalChordToHumanString(hexChord));
      if (hexChord != null) {
        console.log(hexChord + " Original Hex Value");
        const element = document.getElementById(virtualId.toString() + "-chordnew");
        element.innerHTML = convertHexadecimalChordToHumanString(hexChord);
        const elementT = document.getElementById(virtualId.toString() + "-commit");
        elementT.disabled = false;
        console.log("hexChord is " + hexChord);
      }
      await enableSerialChordOutput(false);
    } else {
      console.log("cancelling lineReader");
      console.log(await MainControls.lineReader);
      await cancelReader();
      await setupLineReader();
      console.log("cancelled lineReader");
    }
    btn.value = "edit chord";
  };
  chordTextOrig.id = virtualId.toString() + "-chordorig";
  chordTextOrig.innerHTML = replaceOldAsciiKeys(data2[0]);
  console.log("Output of current chord " + data2);
  cells[2].appendChild(chordTextOrig);
  cells[2].setAttribute("style", "border: 1px solid #D3D3D3;");
  phraseTextOrig.id = virtualId.toString() + "-phraseorig";
  phraseTextOrig.innerHTML = data2[1];
  cells[3].appendChild(phraseTextOrig);
  cells[3].setAttribute("style", "border: 1px solid #D3D3D3;");
  chordTextNew.id = virtualId.toString() + "-chordnew";
  chordTextNew.innerHTML = "";
  cells[4].appendChild(chordTextNew);
  cells[4].setAttribute("style", "border: 1px solid #D3D3D3; ");
  phraseTextInput.id = virtualId.toString() + "-phraseinput";
  phraseTextInput.setAttribute("type", "text");
  phraseTextInput.setAttribute("style", "color:black");
  phraseTextInput.value = "";
  cells[5].setAttribute("style", "color: white; border: 1px solid white;border-right: 1px solid #D3D3D3;");
  cells[5].appendChild(phraseTextInput);
  cells[5].setAttribute("style", "border: 1px solid #D3D3D3;");
  phraseTextInput.onchange = function() {
    const element = document.getElementById(virtualId.toString() + "-commit");
    element.disabled = false;
  };
  btnDelete.id = virtualId.toString() + "-delete";
  btnDelete.type = "button";
  btnDelete.className = "buttonDelete";
  btnDelete.value = "delete";
  btnDelete.setAttribute("style", "background-color: #f44336; border: 1px solid white;color: white;padding: 1px 15px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;");
  cells[6].appendChild(btnDelete);
  cells[6].setAttribute("style", "border: 1px solid #D3D3D3;");
  btnDelete.onclick = function() {
    const element = document.getElementById(virtualId.toString() + "-chordnew");
    element.innerHTML = "DELETE";
    const elementDelete = document.getElementById(virtualId.toString() + "-delete");
    elementDelete.disabled = true;
    const elementCommit = document.getElementById(virtualId.toString() + "-commit");
    elementCommit.disabled = false;
  };
  btnRevert.id = virtualId.toString() + "-revert";
  btnRevert.type = "button";
  btnRevert.className = "buttonRevert";
  btnRevert.value = "revert";
  btnRevert.setAttribute("style", "background-color: green; border: 1px solid white; color: white; padding: 1px 15px; text-align: center; display: inline-block; font-size: 16px;");
  cells[7].appendChild(btnRevert);
  cells[7].setAttribute("style", "border: 1px solid #D3D3D3;");
  btnRevert.onclick = function() {
    const element = document.getElementById(virtualId.toString() + "-chordnew");
    element.innerHTML = "";
    const elementPhase = document.getElementById(virtualId.toString() + "-phraseinput");
    elementPhase.value = "";
    const elementDelete = document.getElementById(virtualId.toString() + "-delete");
    elementDelete.disabled = false;
    const elementCommit = document.getElementById(virtualId.toString() + "-commit");
    elementCommit.disabled = true;
  };
  btnCommit.id = virtualId.toString() + "-commit";
  btnCommit.type = "button";
  btnCommit.className = "buttonCommit";
  btnCommit.value = "commit";
  btnCommit.disabled = true;
  btnCommit.setAttribute("style", "border: 1px solid white;color: white;padding: 1px 15px;text-align: center;display: inline-block;font-size: 16px;hover: background: #00ff00;");
  cells[8].appendChild(btnCommit);
  btnCommit.onclick = async function(distinguisher) {
    const check = document.getElementById(virtualId.toString() + "-delete");
    const checkELementOriginalChord = document.getElementById(virtualId.toString() + "-delete");
    if (check.disabled) {
      document.getElementById(virtualId.toString() + "-");
      await sendCommandString("CML C4 " + data2[2]);
      await readGetOneAndToss();
      const i = this.parentNode.parentNode.rowIndex;
      console.log("deleting row " + virtualId);
      dataTable2.deleteRow(i);
    } else {
      const chordNew = document.getElementById(virtualId.toString() + "-chordnew");
      if (chordNew.innerHTML.length > 0) {
        const phraseinput = document.getElementById(virtualId.toString() + "-phraseinput");
        if (phraseinput.value.length > 0) {
          const chordNewIn = document.getElementById(virtualId.toString() + "-chordnew");
          const phraseInputIn = document.getElementById(virtualId.toString() + "-phraseinput");
          const hexChord = await convertHumanChordToHexadecimalChord(chordNewIn.innerHTML);
          const hexPhrase = await convertHumanPhraseToHexadecimalPhrase(phraseInputIn.value);
          await sendCommandString("CML C3 " + hexChord + " " + hexPhrase);
          console.log("ChordNew In" + chordNewIn.innerHTML);
          console.log("ChordNew In" + phraseInputIn.value);
          const chordorig2 = document.getElementById(virtualId.toString() + "-chordorig");
          const hexChordOrigToDelete = await convertHumanChordToHexadecimalChord(chordorig2.innerHTML);
          await sendCommandString("CML C4 " + hexChordOrigToDelete);
          await readGetOneAndToss();
          const phraseorig = document.getElementById(virtualId.toString() + "-phraseorig");
          const phraseinput2 = document.getElementById(virtualId.toString() + "-phraseinput");
          phraseorig.innerHTML = phraseinput2.value;
        } else {
          const element = document.getElementById(virtualId.toString() + "-chordnew");
          const elementPhase = document.getElementById(virtualId.toString() + "-phraseorig");
          const hexChord = await convertHumanChordToHexadecimalChord(element.innerHTML);
          const hexPhrase = await convertHumanPhraseToHexadecimalPhrase(elementPhase.innerHTML);
          await sendCommandString("CML C3 " + hexChord + " " + hexPhrase);
          const s = elementPhase.innerHTML.split(",");
          await sendCommandString("VAR B4 A" + element.innerHTML + " " + s[0] + " " + s[1]);
          await readGetOneAndToss();
          const chordorig2 = document.getElementById(virtualId.toString() + "-chordorig");
          const hexChordOrigToDelete = await convertHumanChordToHexadecimalChord(chordorig2.innerHTML);
          await sendCommandString("CML C4 " + hexChordOrigToDelete);
        }
        const phraseinput3 = document.getElementById(virtualId.toString() + "-phraseinput");
        const chordorig = document.getElementById(virtualId.toString() + "-chordorig");
        const chordnew = document.getElementById(virtualId.toString() + "-chordnew");
        const delete2 = document.getElementById(virtualId.toString() + "-delete");
        const commit2 = document.getElementById(virtualId.toString() + "-commit");
        phraseinput3.value = "";
        chordorig.innerHTML = chordnew.innerHTML;
        chordnew.innerHTML = "";
        delete2.disabled = false;
        commit2.disabled = true;
      } else {
        const check2 = document.getElementById(virtualId.toString() + "-phraseinput");
        if (check2.value.length > 0) {
          const chordorig = document.getElementById(virtualId.toString() + "-chordorig");
          const phraseinput5 = document.getElementById(virtualId.toString() + "-phraseinput");
          const hexChord = await convertHumanChordToHexadecimalChord(chordorig.innerHTML);
          const hexPhrase = await convertHumanPhraseToHexadecimalPhrase(phraseinput5.value);
          await sendCommandString("CML C3 " + hexChord + " " + hexPhrase);
          const phraseorig3 = document.getElementById(virtualId.toString() + "-phraseorig");
          const phraseinput3 = document.getElementById(virtualId.toString() + "-phraseinput");
          const chordnew = document.getElementById(virtualId.toString() + "-chordnew");
          const delete3 = document.getElementById(virtualId.toString() + "-delete");
          const commit3 = document.getElementById(virtualId.toString() + "-commit");
          phraseorig3.innerHTML = phraseinput3.innerHTML;
          phraseinput3.value = "";
          chordnew.innerHTML = "";
          delete3.disabled = false;
          commit3.disabled = true;
        }
      }
    }
  };
  if (isFromFile) {
    phraseTextInput.value = data2[1];
    btnCommit.disabled = false;
  }
  const trow = dataTable2.insertRow(-1);
  cells.push(trow);
  const tr = [];
  tr.push(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-[#222] mx-auto max-w shadow-lg rounded-lg overflow-hidden row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:flex md:items-center px-6 py-4"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: "block h-8 sm:h-12 rounded-xs mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: "block h-8 sm:h-12 rounded-xs mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-center sm:text-left sm:flex-grow"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    className: "text-xs float-right font-semibold rounded-full px-4 py-1 leading-normal bg-[#22c55e] border border-purple text-purple hover:bg-purple hover:text-black"
  }, "Edit Chord"), /* @__PURE__ */ React.createElement("button", {
    className: "text-xs float-right font-semibold rounded-full px-4 py-1 leading-normal bg-[#22c55e] border border-purple text-purple hover:bg-purple hover:text-black"
  }, "Save"), /* @__PURE__ */ React.createElement("button", {
    className: "text-xs float-right font-semibold rounded-full px-4 py-1 leading-normal bg-[#22c55e] border border-purple text-purple hover:bg-purple hover:text-black"
  }, "Delete Chord")))))));
  return /* @__PURE__ */ React.createElement("div", null, tr[0]);
}
export const asyncCallWithTimeout = async (asyncPromise, timeLimit, virtualId) => {
  let timeoutHandle;
  const commitButton = document.getElementById(virtualId.toString() + "-commit");
  const timeoutPromise = new Promise((_resolve, reject) => {
    timeoutHandle = setTimeout(() => _resolve(commitButton?.click()), timeLimit);
  });
  return Promise.race([asyncPromise, timeoutPromise]).then((result) => {
    clearTimeout(timeoutHandle);
    return result;
  });
};
export const asyncCallForDownloadChords = async (asyncPromise, timeLimit) => {
  let timeoutHandle;
  const timeoutPromise = new Promise((_resolve, reject) => {
    timeoutHandle = setTimeout(() => _resolve(asyncPromise), timeLimit);
  });
  return Promise.race([asyncPromise, timeoutPromise]).then((result) => {
    clearTimeout(timeoutHandle);
    return result;
  });
};
export async function clickCommit(virtualId) {
  const check = document.getElementById(virtualId.toString() + "-delete");
  if (check.disabled) {
    document.getElementById(virtualId.toString() + "-");
    await sendCommandString("CML C4 " + data[2]);
    await readGetOneAndToss();
    const i = this.parentNode.parentNode.rowIndex;
    console.log("deleting row " + i.toString());
    dataTable.deleteRow(i);
  } else {
    const chordNew = document.getElementById(virtualId.toString() + "-chordnew");
    if (chordNew.innerHTML.length > 0) {
      const phraseinput = document.getElementById(virtualId.toString() + "-phraseinput");
      if (phraseinput.value.length > 0) {
        const chordNewIn = document.getElementById(virtualId.toString() + "-chordnew");
        const phraseInputIn = document.getElementById(virtualId.toString() + "-phraseinput");
        const hexChord = await convertHumanChordToHexadecimalChord(chordNewIn.innerHTML);
        const hexPhrase = await convertHumanPhraseToHexadecimalPhrase(phraseInputIn.value);
        await sendCommandString("CML C3 " + hexChord + " " + hexPhrase);
        const chordorig2 = document.getElementById(virtualId.toString() + "-chordorig");
        const hexChordOrigToDelete = await convertHumanChordToHexadecimalChord(chordorig2.innerHTML);
        await sendCommandString("CML C4 " + hexChordOrigToDelete);
        const phraseorig = document.getElementById(virtualId.toString() + "-phraseorig");
        const phraseinput2 = document.getElementById(virtualId.toString() + "-phraseinput");
        phraseorig.innerHTML = phraseinput2.value;
      } else {
        const element = document.getElementById(virtualId.toString() + "-chordnew");
        const elementPhase = document.getElementById(virtualId.toString() + "-phraseorig");
        const hexChord = await convertHumanChordToHexadecimalChord(element.innerHTML);
        const hexPhrase = await convertHumanPhraseToHexadecimalPhrase(elementPhase.innerHTML);
        await sendCommandString("CML C3 " + hexChord + " " + hexPhrase);
        const s = elementPhase.innerHTML.split(",");
        await sendCommandString("VAR B4 A" + element.innerHTML + " " + s[0] + " " + s[1]);
        const chordorig2 = document.getElementById(virtualId.toString() + "-chordorig");
        const hexChordOrigToDelete = await convertHumanChordToHexadecimalChord(chordorig2.innerHTML);
        await sendCommandString("CML C4 " + hexChordOrigToDelete);
      }
      const phraseinput3 = document.getElementById(virtualId.toString() + "-phraseinput");
      const chordorig = document.getElementById(virtualId.toString() + "-chordorig");
      const chordnew = document.getElementById(virtualId.toString() + "-chordnew");
      const delete2 = document.getElementById(virtualId.toString() + "-delete");
      const commit2 = document.getElementById(virtualId.toString() + "-commit");
      phraseinput3.value = "";
      chordorig.innerHTML = chordnew.innerHTML;
      chordnew.innerHTML = "";
      delete2.disabled = false;
      commit2.disabled = true;
    } else {
      const check2 = document.getElementById(virtualId.toString() + "-phraseinput");
      if (check2.value.length > 0) {
        const chordorig = document.getElementById(virtualId.toString() + "-chordorig");
        const phraseinput5 = document.getElementById(virtualId.toString() + "-phraseinput");
        const hexChord = await convertHumanChordToHexadecimalChord(chordorig.innerHTML);
        const hexPhrase = await convertHumanPhraseToHexadecimalPhrase(phraseinput5.value);
        console.log("Chord Original " + chordorig);
        await sendCommandString("CML C3 " + hexChord + " " + hexPhrase);
        const phraseorig3 = document.getElementById(virtualId.toString() + "-phraseorig");
        const phraseinput3 = document.getElementById(virtualId.toString() + "-phraseinput");
        const chordnew = document.getElementById(virtualId.toString() + "-chordnew");
        const delete3 = document.getElementById(virtualId.toString() + "-delete");
        const commit3 = document.getElementById(virtualId.toString() + "-commit");
        phraseorig3.innerHTML = phraseinput3.innerHTML;
        phraseinput3.value = "";
        chordnew.innerHTML = "";
        delete3.disabled = false;
        commit3.disabled = true;
      }
    }
  }
  await readGetOneAndToss();
}
export function pressCommitButton(virtualId) {
  const commitButton = document.getElementById(virtualId.toString() + "-commit");
  clickCommit(virtualId);
}
export async function commitTo(virtualId) {
  const commitButton = document.getElementById(virtualId.toString() + "-commit");
  if (commitButton.disabled == false) {
    commitButton.click();
  }
  const chordorig = document.getElementById(virtualId.toString() + "-chordorig");
  const phraseinput5 = document.getElementById(virtualId.toString() + "-phraseinput");
  const hexChord = await convertHumanChordToHexadecimalChord(chordorig.innerHTML);
  const hexPhrase = await convertHumanPhraseToHexadecimalPhrase(phraseinput5.value);
  await sendCommandString("CML C3 " + hexChord + " " + hexPhrase);
  await readGetOneAndToss();
  console.log("Done sending command");
}
export function convertHumanChordToHexadecimalChord(humanChord) {
  console.log("convertHumanChordToHexadecimalChord()");
  console.log(humanChord);
  let hexChord = "";
  const decChordParts = [];
  if (MainControls._chordmapId == "ID CHARACHORDER X S2") {
    humanChord = humanChord.toUpperCase();
    const humanChordParts = humanChord.split(" + ");
    humanChordParts.forEach((part) => {
      const actionCode = tryItAll(part);
      actionCode == -1 ? console.log("ActionCode does not exist") : decChordParts.push(actionCode);
    });
  } else {
    const humanChordParts = humanChord.split(" + ");
    humanChordParts.forEach((part) => {
      const actionCode = actionMap.indexOf(part);
      actionCode == -1 ? console.log("ActionCode does not exist") : decChordParts.push(actionCode);
    });
  }
  console.log("decoded " + decChordParts);
  decChordParts.sort(function(a, b) {
    return b - a;
  });
  const chainIndex = 0;
  let binChord = pad(Dec2Bin(chainIndex), 8);
  for (let i = 0; i < decChordParts.length; i++) {
    if (i < 12) {
      binChord += pad(Dec2Bin(decChordParts[i]), 10);
    }
  }
  binChord = backpad(binChord, 128);
  console.log(binChord);
  for (let i = 0; i < 16; i++) {
    hexChord += pad(Bin2Hex(binChord.substring(i * 8, (i + 1) * 8)), 2);
  }
  hexChord = hexChord.toUpperCase();
  console.log("This is the hexChord " + hexChord);
  return hexChord;
}
export function convertHumanPhraseToHexadecimalPhrase(humanPhrase) {
  console.log("convertHumanPhraseToHexadecimalPhrase()");
  console.log(humanPhrase);
  let hexPhrase = "";
  for (let i = 0; i < humanPhrase.length; i++) {
    const actionCode = humanPhrase.charCodeAt(i);
    const hexPhrasePart = pad(Dec2Hex(actionCode), 2);
    hexPhrase += hexPhrasePart;
  }
  hexPhrase = hexPhrase.toUpperCase();
  console.log("This is the hex human phrase " + hexPhrase);
  return hexPhrase;
}
export async function readGetNone() {
  console.log(" ");
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb250cm9scy9tYWluQ29udHJvbHMudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBR0E7QUFHTywwQkFBbUI7QUFBQTtBQUtWLEFBTFQsYUFLUyxtQkFBbUIsSUFBSTtBQUN2QixBQU5ULGFBTVMsbUJBQW1CLElBQUk7QUFFdkIsQUFSVCxhQVFTLGNBQW1CO0FBQ25CLEFBVFQsYUFTUyx5QkFBOEI7QUFDOUIsQUFWVCxhQVVTLG1CQUF3QjtBQUN4QixBQVhULGFBV1MscUJBQXFCO0FBQ3JCLEFBWlQsYUFZUyxRQUFRO0FBRVIsQUFkVCxhQWNTLDhCQUE4QjtBQUM5QixBQWZULGFBZVMsOEJBQThCO0FBQzlCLEFBaEJULGFBZ0JTLGdDQUFnQztBQUNoQyxBQWpCVCxhQWlCUyxtQ0FBbUM7QUFDbkMsQUFsQlQsYUFrQlMsZ0NBQWdDO0FBQ2hDLEFBbkJULGFBbUJTLGdDQUFnQztBQUNoQyxBQXBCVCxhQW9CUyxpQ0FBaUM7QUFDakMsQUFyQlQsYUFxQlMsZ0NBQWdDO0FBQ2hDLEFBdEJULGFBc0JTLDRCQUE0QjtBQUM1QixBQXZCVCxhQXVCUyw4QkFBOEI7QUFDOUIsQUF4QlQsYUF3QlMsNkJBQTZCO0FBQzdCLEFBekJULGFBeUJTLHlCQUF5QjtBQUN6QixBQTFCVCxhQTBCUyw0QkFBNEI7QUFDNUIsQUEzQlQsYUEyQlMsK0JBQStCO0FBQy9CLEFBNUJULGFBNEJTLHdCQUF3QjtBQUN4QixBQTdCVCxhQTZCUyw0QkFBNEI7QUFDNUIsQUE5QlQsYUE4QlMsK0JBQStCO0FBQy9CLEFBL0JULGFBK0JTLGdDQUFnQztBQUVoRCxNQUFNLG9DQUFvQztBQUFBLEVBQ3hDLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQTtBQUdSLE1BQU0sNEJBQTRCO0FBQUEsRUFDaEMsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBO0FBR1YsTUFBTSxtQ0FBbUM7QUFBQSxFQUN2QyxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxHQUFHO0FBQUEsRUFDSCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxHQUFHO0FBQUEsRUFDSCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFFTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUE7QUFHUCxNQUFNLHFCQUFxQjtBQUFBLEVBQ3pCLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLEtBQUs7QUFBQSxFQUNMLE1BQU07QUFBQSxFQUNOLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxFQUNWLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLEtBQUs7QUFBQSxFQUNMLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQU9SLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLFNBQVM7QUFBQSxFQUNULE1BQU07QUFBQSxF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
