import React from "../../../../snowpack/pkg/react.js";
export function addHeadersToDataTable() {
  console.log("addHeadersToDataTable()");
  const dataTable = document.getElementById("dataTable");
  dataTable.setAttribute("style", "margin-left: auto; margin-right: auto;");
  const header = dataTable.createTHead();
  const row = dataTable.insertRow(0);
  const cells = [];
  cells.push(row.insertCell(-1));
  cells[0].innerHTML = "Virtual Id";
  cells.push(row.insertCell(-1));
  cells[0].setAttribute("style", "border: 1px solid white; padding:10px;");
  cells[1].innerHTML = "Edit Chord";
  cells[1].setAttribute("style", "border: 1px solid white; padding:10px;");
  cells.push(row.insertCell(-1));
  cells[2].innerHTML = "Current Chord";
  cells[2].setAttribute("style", "border: 1px solid white; padding:10px;");
  cells.push(row.insertCell(-1));
  cells[3].innerHTML = "Current Phrase";
  cells[3].setAttribute("style", "border: 1px solid white; padding:10px;");
  cells.push(row.insertCell(-1));
  cells[4].innerHTML = "New Chord";
  cells[4].setAttribute("style", "border: 1px solid white; padding:10px; text-align: center;");
  cells.push(row.insertCell(-1));
  cells[5].innerHTML = "New Phrase";
  cells[5].setAttribute("style", "border: 1px solid white; padding:10px;");
  cells.push(row.insertCell(-1));
  cells[6].innerHTML = "Delete";
  cells[6].setAttribute("style", "border: 1px solid white; padding:10px;");
  cells.push(row.insertCell(-1));
  cells[7].innerHTML = "Revert";
  cells[7].setAttribute("style", "border: 1px solid white; padding:10px;");
  cells.push(row.insertCell(-1));
  cells[8].innerHTML = "Commit";
  cells[8].setAttribute("style", "border: 1px solid white; padding:10px;");
  cells.push(row.insertCell(-1));
}
export function AddHeaders() {
  React.useEffect(() => {
    addHeadersToDataTable();
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    id: "terminal",
    className: "ml-center mr-center hidden"
  }, /* @__PURE__ */ React.createElement("ul", {
    id: "list"
  }), /* @__PURE__ */ React.createElement("table", {
    id: "dataTable"
  })));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL2FkZEhlYWRlcnMudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFFTyx3Q0FBaUM7QUFDdEMsVUFBUSxJQUFJO0FBQ1osUUFBTSxZQUE4QixTQUFTLGVBQzNDO0FBRUYsWUFBVSxhQUFhLFNBQVM7QUFDaEMsUUFBTSxTQUNKLFVBQVU7QUFDWixRQUFNLE1BQTJCLFVBQVUsVUFDekM7QUFFRixRQUFNLFFBQVE7QUFDZCxRQUFNLEtBQUssSUFBSSxXQUFXO0FBQzFCLFFBQU0sR0FBRyxZQUFZO0FBQ3JCLFFBQU0sS0FBSyxJQUFJLFdBQVc7QUFDMUIsUUFBTSxHQUFHLGFBQWEsU0FBUztBQUMvQixRQUFNLEdBQUcsWUFBWTtBQUNyQixRQUFNLEdBQUcsYUFBYSxTQUFTO0FBQy9CLFFBQU0sS0FBSyxJQUFJLFdBQVc7QUFDMUIsUUFBTSxHQUFHLFlBQVk7QUFDckIsUUFBTSxHQUFHLGFBQWEsU0FBUztBQUMvQixRQUFNLEtBQUssSUFBSSxXQUFXO0FBQzFCLFFBQU0sR0FBRyxZQUFZO0FBQ3JCLFFBQU0sR0FBRyxhQUFhLFNBQVM7QUFDL0IsUUFBTSxLQUFLLElBQUksV0FBVztBQUMxQixRQUFNLEdBQUcsWUFBWTtBQUNyQixRQUFNLEdBQUcsYUFDUCxTQUNBO0FBRUYsUUFBTSxLQUFLLElBQUksV0FBVztBQUMxQixRQUFNLEdBQUcsWUFBWTtBQUNyQixRQUFNLEdBQUcsYUFBYSxTQUFTO0FBQy9CLFFBQU0sS0FBSyxJQUFJLFdBQVc7QUFDMUIsUUFBTSxHQUFHLFlBQVk7QUFDckIsUUFBTSxHQUFHLGFBQWEsU0FBUztBQUMvQixRQUFNLEtBQUssSUFBSSxXQUFXO0FBQzFCLFFBQU0sR0FBRyxZQUFZO0FBQ3JCLFFBQU0sR0FBRyxhQUFhLFNBQVM7QUFDL0IsUUFBTSxLQUFLLElBQUksV0FBVztBQUMxQixRQUFNLEdBQUcsWUFBWTtBQUNyQixRQUFNLEdBQUcsYUFBYSxTQUFTO0FBQy9CLFFBQU0sS0FBSyxJQUFJLFdBQVc7QUFBQTtBQVFyQiw2QkFBb0M7QUFDekMsUUFBTSxVQUFVLE1BQU07QUFDcEI7QUFBQSxLQUNDO0FBQ0gsU0FDRSxvQ0FBQyxNQUFNLFVBQVAsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBVyxXQUFVO0FBQUEsS0FDM0Isb0NBQUMsTUFBRDtBQUFBLElBQUksSUFBRztBQUFBLE1BQ1Asb0NBQUMsU0FBRDtBQUFBLElBQU8sSUFBRztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
