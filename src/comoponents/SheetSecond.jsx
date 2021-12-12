import React from "react";
import "../styles/sheet.css";

export default function SheetSecond() {
  return (
    <div class="grid-container-first">
      <div class="heading">Infuencer Requirements</div>
      <div class="grid-item">
        <form>
          <div class="form-group row p-1">
            <label for="Total Influencers Reqd" class="col-sm-6 ">
              Total Influencers Reqd*
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" required />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Category" class="col-sm-6 ">
              Category*
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" required />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Followers Range" class="col-sm-6 ">
              Followers Range*
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" required />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Brief" class="col-sm-6 ">
              Brief(with URL)*
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" required />
            </div>
          </div>
        </form>
      </div>

      <div class="heading">Advanced Influencer Requirements</div>
      <div class="grid-item">
        <form>
          <div class="form-group row p-1">
            <label for="Gender" class="col-sm-6 ">
              Gender
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Location" class="col-sm-6 ">
              Location
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Age" class="col-sm-6 ">
              Age
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="CPV Target" class="col-sm-6 ">
              CPV Target
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Category" class="col-sm-6 ">
              Category
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="inputtext" />
            </div>
          </div>
          <div class="form-group row p-1">
            <label for="Other Criteria" class="col-sm-6 ">
              Other Criteria
            </label>
            <div class="col-sm-5">
              <textarea id="other-criteria" name="Other Criteria"></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
