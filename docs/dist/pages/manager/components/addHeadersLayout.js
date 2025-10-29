import React from "../../../../snowpack/pkg/react.js";
export function addHeadersToLayoutDataTable() {
  console.log("addHeadersToDataTable()");
  const dataTable = document.getElementById("layoutDataTable");
  dataTable.setAttribute("style", "margin-left: auto; margin-right: auto;");
  const header = dataTable.createTHead();
  const row = dataTable.insertRow(0);
  const cells = [];
  cells.push(row.insertCell(-1));
  cells[0].innerHTML = "Count";
  cells.push(row.insertCell(-1));
  cells[0].setAttribute("style", "border: 1px solid white; padding:10px;");
  cells.push(row.insertCell(-1));
  cells[2].innerHTML = "KeyMap";
  cells[2].setAttribute("style", "border: 1px solid white; padding:10px;");
  cells.push(row.insertCell(-1));
  cells[3].innerHTML = "KeyMap Position";
  cells[3].setAttribute("style", "border: 1px solid white; padding:10px;");
  cells.push(row.insertCell(-1));
  cells[4].innerHTML = "KeyMap Value";
  cells[4].setAttribute("style", "border: 1px solid white; padding:10px; text-align: center;");
  cells.push(row.insertCell(-1));
}
export function AddLayoutHeaders() {
  React.useEffect(() => {
    addHeadersToLayoutDataTable();
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    id: "terminal",
    className: "ml-center mr-center"
  }, /* @__PURE__ */ React.createElement("ul", {
    id: "list"
  }), /* @__PURE__ */ React.createElement("table", {
    id: "layoutDataTable"
  })));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL2FkZEhlYWRlcnNMYXlvdXQudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFFTyw4Q0FBdUM7QUFDNUMsVUFBUSxJQUFJO0FBQ1osUUFBTSxZQUE4QixTQUFTLGVBQzNDO0FBRUYsWUFBVSxhQUFhLFNBQVM7QUFDaEMsUUFBTSxTQUNKLFVBQVU7QUFDWixRQUFNLE1BQTJCLFVBQVUsVUFDekM7QUFFRixRQUFNLFFBQVE7QUFDZCxRQUFNLEtBQUssSUFBSSxXQUFXO0FBQzFCLFFBQU0sR0FBRyxZQUFZO0FBQ3JCLFFBQU0sS0FBSyxJQUFJLFdBQVc7QUFDMUIsUUFBTSxHQUFHLGFBQWEsU0FBUztBQUUvQixRQUFNLEtBQUssSUFBSSxXQUFXO0FBQzFCLFFBQU0sR0FBRyxZQUFZO0FBQ3JCLFFBQU0sR0FBRyxhQUFhLFNBQVM7QUFDL0IsUUFBTSxLQUFLLElBQUksV0FBVztBQUMxQixRQUFNLEdBQUcsWUFBWTtBQUNyQixRQUFNLEdBQUcsYUFBYSxTQUFTO0FBQy9CLFFBQU0sS0FBSyxJQUFJLFdBQVc7QUFDMUIsUUFBTSxHQUFHLFlBQVk7QUFDckIsUUFBTSxHQUFHLGFBQ1AsU0FDQTtBQUVGLFFBQU0sS0FBSyxJQUFJLFdBQVc7QUFBQTtBQVVyQixtQ0FBMEM7QUFDL0MsUUFBTSxVQUFVLE1BQU07QUFDcEI7QUFBQSxLQUNDO0FBQ0gsU0FDRSxvQ0FBQyxNQUFNLFVBQVAsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBVyxXQUFVO0FBQUEsS0FDM0Isb0NBQUMsTUFBRDtBQUFBLElBQUksSUFBRztBQUFBLE1BQ1Asb0NBQUMsU0FBRDtBQUFBLElBQU8sSUFBRztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
