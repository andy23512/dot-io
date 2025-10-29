const managerStoreState = {
  downloadedChords: {
    chords: []
  },
  downloadedChordLayout: {
    chordLayout: []
  },
  serialApiResponses: [],
  serialApiRequests: [],
  commitAllCounterForChords: 0,
  commitAllCounterForChordLayout: 0,
  serialPort: "",
  portReader: "",
  lineReader: "",
  lineReaderDone: "",
  abortController1: new AbortController(),
  abortController2: new AbortController(),
  _chordmapCountOnDevice: 50,
  _firmwareVersion: "0",
  _chordMapIdCounter: 0,
  count: 0
};
export default managerStoreState;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvc3RvcmUvbWFuYWdlclN0b3JhZ2VTdG9yZS9zdGF0ZS50cyJdLAogICJtYXBwaW5ncyI6ICJBQUVBLE1BQU0sb0JBQXVDO0FBQUEsRUFDM0Msa0JBQWtCO0FBQUEsSUFDaEIsUUFBUTtBQUFBO0FBQUEsRUFFVix1QkFBdUI7QUFBQSxJQUNyQixhQUFhO0FBQUE7QUFBQSxFQUVmLG9CQUFvQjtBQUFBLEVBQ3BCLG1CQUFtQjtBQUFBLEVBQ25CLDJCQUEyQjtBQUFBLEVBQzNCLGdDQUFnQztBQUFBLEVBQ2hDLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQixJQUFJO0FBQUEsRUFDdEIsa0JBQWtCLElBQUk7QUFBQSxFQUN0Qix3QkFBd0I7QUFBQSxFQUN4QixrQkFBa0I7QUFBQSxFQUNsQixvQkFBb0I7QUFBQSxFQUNwQixPQUFPO0FBQUE7QUFHVCxlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
