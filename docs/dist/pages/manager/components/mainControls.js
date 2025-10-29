import {
  _keyMapDefaults,
  _keyMap,
  _chordMaps,
  _chordLayout,
  actionMap,
  oldAsciiKeyReplacementDictionary
} from "../controls/maps.js";
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
  LEFT_CTRL: 512,
  LEFT_SHIFT: 513,
  LEFT_ALT: 514,
  LEFT_GUI: 515,
  RIGHT_CTRL: 516,
  RIGHT_SHIFT: 517,
  RIGHT_ALT: 518
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
      console.log("this is actionMap output " + actionMap[actionCode]);
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
function convertKeyPostionsHumanPosition(inPostion) {
  return inPostion.split("_").pop();
}
function tryItAll(character) {
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
    for (let i = 0; i < humanString.length; i++) {
      if (ReverseLookUpTable[humanString[i].toUpperCase()] != void 0 && humanString[i] != humanString[i].toUpperCase()) {
        !shouldModBeTrue ? [shouldModBeTrue = true, hexString += leftShiftValue] : "";
        hexString += DecimalHexTwosComplement(actionMap.indexOf(humanString[i].toUpperCase()));
      } else if (humanString[i] == humanString[i].toUpperCase()) {
        !shouldModBeTrue ? [shouldModBeTrue = true, hexString += leftShiftValue] : "";
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
  const size = 8;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL21haW5Db250cm9scy50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFFQTtBQUdPLDBCQUFtQjtBQUFBO0FBS1YsQUFMVCxhQUtTLG1CQUFtQixJQUFJO0FBQ3ZCLEFBTlQsYUFNUyxtQkFBbUIsSUFBSTtBQUV2QixBQVJULGFBUVMsY0FBbUI7QUFDbkIsQUFUVCxhQVNTLHlCQUE4QjtBQUM5QixBQVZULGFBVVMsbUJBQXdCO0FBQ3hCLEFBWFQsYUFXUyxxQkFBcUI7QUFDckIsQUFaVCxhQVlTLFFBQVE7QUFFUixBQWRULGFBY1MsOEJBQThCO0FBQzlCLEFBZlQsYUFlUyw4QkFBOEI7QUFDOUIsQUFoQlQsYUFnQlMsZ0NBQWdDO0FBQ2hDLEFBakJULGFBaUJTLG1DQUFtQztBQUNuQyxBQWxCVCxhQWtCUyxnQ0FBZ0M7QUFDaEMsQUFuQlQsYUFtQlMsZ0NBQWdDO0FBQ2hDLEFBcEJULGFBb0JTLGlDQUFpQztBQUNqQyxBQXJCVCxhQXFCUyxnQ0FBZ0M7QUFDaEMsQUF0QlQsYUFzQlMsNEJBQTRCO0FBQzVCLEFBdkJULGFBdUJTLDhCQUE4QjtBQUM5QixBQXhCVCxhQXdCUyw2QkFBNkI7QUFDN0IsQUF6QlQsYUF5QlMseUJBQXlCO0FBQ3pCLEFBMUJULGFBMEJTLDRCQUE0QjtBQUM1QixBQTNCVCxhQTJCUywrQkFBK0I7QUFDL0IsQUE1QlQsYUE0QlMsd0JBQXdCO0FBQ3hCLEFBN0JULGFBNkJTLDRCQUE0QjtBQUM1QixBQTlCVCxhQThCUywrQkFBK0I7QUFDL0IsQUEvQlQsYUErQlMsZ0NBQWdDO0FBRWhELE1BQU0sb0NBQW9DO0FBQUEsRUFDeEMsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBO0FBR1IsTUFBTSw0QkFBNEI7QUFBQSxFQUNoQyxPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUE7QUFHVixNQUFNLG1DQUFtQztBQUFBLEVBQ3ZDLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEdBQUc7QUFBQSxFQUNILEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEdBQUc7QUFBQSxFQUNILEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUVMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQTtBQUdQLE1BQU0scUJBQXFCO0FBQUEsRUFDekIsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsS0FBSztBQUFBLEVBQ0wsTUFBTTtBQUFBLEVBQ04sS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFB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
