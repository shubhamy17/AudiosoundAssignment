import React from "react";
import "../styles/sheet.css";

export default function Sheetthird() {
  return (
    <div class="grid-container-first">
      <div class="heading">Proposed Campaign Schedule</div>
      <div class="grid-item">
        <form>
          <div class="form-group row p-1">
            <label for="Infuencer Pooling Due DT" class="col-sm-6 ">
              Infuencer Pooling Due DT*
            </label>
            <div class="col-sm-5">
              <input
                type="datetime-local"
                class="form-control"
                id="inputtext"
                required
              />
            </div>
          </div>
          <div class="form-group row p-1">
            <label
              for="Infuencer Selection & Backup Due Date"
              class="col-sm-6 "
            >
              Infuencer Selection & Backup Due Date*
            </label>
            <div class="col-sm-5">
              <input type="date" class="form-control" id="inputtext" required />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Product despatched date" class="col-sm-6 ">
              Product despatched date(if any)*
            </label>
            <div class="col-sm-5">
              <input type="date" class="form-control" id="inputtext" required />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Content Start Date" class="col-sm-6 ">
              Content Start Date*
            </label>
            <div class="col-sm-5">
              <input
                type="datetime-local"
                class="form-control"
                id="inputtext"
                required
              />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Go live start date" class="col-sm-6 ">
              Go live start date*
            </label>
            <div class="col-sm-5">
              <input
                type="datetime-local"
                class="form-control"
                id="inputtext"
                required
              />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Go live end date" class="col-sm-6 ">
              Go live end date(Campaign Close DT)*
            </label>
            <div class="col-sm-5">
              <input
                type="datetime-local"
                class="form-control"
                id="inputtext"
                required
              />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Campaign Performance Report" class="col-sm-6 ">
              Campaign Performance Report
            </label>
            <div class="col-sm-5">
              <input
                type="datetime-local"
                class="form-control"
                id="inputtext"
              />
            </div>
          </div>
        </form>
      </div>

      <div class="heading"></div>
      <div class="grid-item">
        <form>
          <div class="form-group row p-1">
            <label for="Campaign Sign-off URL" class="col-sm-6 ">
              Campaign Sign-off URL
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Pooling Sheet URL-Internal" class="col-sm-6 ">
              Pooling Sheet URL-Internal
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" />
            </div>
          </div>
          <div class="row">
            <div class="btn-group mr-2">
              <button class="btn btn-primary col-sm-3 clear">Clear</button>
              <button class="btn btn-primary col-sm-3 submit">
                Submit Campaign
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
