import React from "react";
import "../styles/sheet.css";
import Sheetfirst from "./Sheetfirst";
import SheetSecond from "./SheetSecond";
import Sheetthird from "./Sheetthird";

export default function Sheet() {
  return (
    <div class="grid-container">
      <Sheetfirst />
      <SheetSecond />
      <Sheetthird />
    </div>
  );
}
