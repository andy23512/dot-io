import React, { ReactElement } from 'react';
import { resetDataTable } from '../../manager/components/resetDataTable';
import {
    convertHexadecimalChordToHumanChordForAllChordsTier,
    convertHexadecimalPhraseToAsciiString,
    MainControls,
    readGetOneChordmap,
    sendCommandString
} from '../controls/mainControls';

    import {
    ChordStatisticsFromDevice,
    createEmptyChordStatisticsFromDevice
} from '../../../models/trainingStatistics';

export async function getGetAll(){
  resetDataTable();
    //await selectBase(); //select BASE
    await sendCommandString("CML C0")
    const { value } = await MainControls.lineReader.read();
    const chordCountSplit = value.split(" ")
    const chordCountParsedValue = parseInt(chordCountSplit[chordCountSplit.length-1])

    for(let i=0;i<chordCountParsedValue;i++){
      console.log(MainControls._chordmapCountOnDevice);
      //wait sendCommandString("GETSOME "+(i+0).toString()+" "+(i+1).toString());
      await sendCommandString("CML C1 "+ i)
      //await sendCommandString('VAR '+'B3 '+'A '+element.innerHTML+" "+ s[0] + ' '+ s[1]);

        //console.log("MapID");
    //console.log(MainControls._chordmapId);
      await readGetOneChordmap();
    }

  }

  export async function downloadChordsForAllChordsModule(){
      //resetDataTable();
      //await selectBase(); //select BASE
      await sendCommandString("CML C0")
      const { value } = await MainControls.lineReader.read();
      const chordCountSplit = value.split(" ")
      const chordCountParsedValue = parseInt(chordCountSplit[chordCountSplit.length-1])
      const strValues = [];
      const statisticsFromDevice = [];

      const element: HTMLElement = document.getElementById("downloadCompletionPercentage") as HTMLInputElement;; //.innerHTML = "status: opened serial port";

      for(let i=0;i<chordCountParsedValue;i++){
        console.log(MainControls._chordmapCountOnDevice);
        //wait sendCommandString("GETSOME "+(i+0).toString()+" "+(i+1).toString());
        await sendCommandString("CML C1 "+ i)
        //await sendCommandString('VAR '+'B3 '+'A '+element.innerHTML+" "+ s[0] + ' '+ s[1]);

          //console.log("MapID");
      //console.log(MainControls._chordmapId);
       // await readGetOneChordmap();


        const { value } = await MainControls.lineReader.read();
        const splitter = value.split(' ');
        const tempCurrentChord=[];
        let phrase ='';
        let chord : string[]= [];
        console.log(splitter)
        if (value) {
          const arrValue = [...splitter];
          //ascii_to_hexa(arrValue);
          const strValue = arrValue;
          let hexChordString = "";
          hexChordString = strValue[3]; //Should be 32 characters at all times
          let hexAsciiString = "";
          hexAsciiString = strValue[4];
          //console.log('StrValue '+convertHexadecimalChordToHumanChord(hexChordString));
          tempCurrentChord[0] = convertHexadecimalChordToHumanChordForAllChordsTier(hexChordString);
          tempCurrentChord[1] = convertHexadecimalPhraseToAsciiString(hexAsciiString);
          chord = convertHexadecimalChordToHumanChordForAllChordsTier(hexChordString);
          phrase = convertHexadecimalPhraseToAsciiString(hexAsciiString);
      }
      const newStat: ChordStatisticsFromDevice = createEmptyChordStatisticsFromDevice(phrase, "ALLCHORDS", [], chord);

      statisticsFromDevice.push(newStat);
      //strValues.push(tempCurrentChord);
      element.innerHTML = "Chord Download Progress: "+ (((i/chordCountParsedValue)*100).toFixed(0))+'%';

    }

    localStorage.setItem("chordsReadFromDevice", JSON.stringify({"statistics":statisticsFromDevice})); //Store downloaded chords in local storage
    return true

    }

  export function Download(): ReactElement {
    return (
      <React.Fragment>
      <div id="statusDiv" style={{display:'none'}} >Status: </div>

      <button
      className="text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222] position-absolute"
      color="pink"
      onClick={() => getGetAll()}
      >Populate Table</button>
      </React.Fragment>
    );
  }