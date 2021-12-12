import React from "react";
import "../styles/sheet.css";

export default function Sheetfirst() {
  return (
    <div class="grid-container-first">
      <div class="heading">Campaign Details</div>
      <div class="grid-item">
        <form>
          <div class="form-group row p-1">
            <label for="Employee Name" class="col-sm-6 ">
              Employee Name*
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" required />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Campaign Name" class="col-sm-6 ">
              Campaign Name*
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" required />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Company Name" class="col-sm-6 ">
              Company Name*
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" required />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Company POC Email" class="col-sm-6 ">
              Company POC Email*
            </label>
            <div class="col-sm-5">
              <input
                type="Email"
                class="form-control"
                id="inputtext"
                required
              />
            </div>
          </div>
        </form>
      </div>

      <div class="heading">Campaign Requirements</div>
      <div class="grid-item">
        <form>
          <div class="form-group row p-1">
            <label for="Campaign Objective" class="col-sm-6 ">
              Campaign Objective*
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" required />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Platform" class="col-sm-6 ">
              Platform*
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" required />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Payout Type" class="col-sm-6 ">
              Payout Type*
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" required />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Product in Focus" class="col-sm-6 ">
              Product in Focus(with URL)*
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" required />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Deliverables" class="col-sm-6 ">
              Deliverables*
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" required />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Campaign Budget" class="col-sm-6 ">
              Campaign Budget*
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" required />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Payment Terms brand" class="col-sm-6 ">
              Payment Terms brand*
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" required />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
