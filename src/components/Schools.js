import React from "react";
import schooldata from "../components/data/schooldata";
import "./Schools.css";

export default function Schools() {
  console.log(schooldata);
  return (
    <div>
      {schooldata.map((data, key) => {
        return (
          <div key={data.id}>
            <div>
              <a className="name">{data.name}</a>
            </div>
            <div>
              <span className="icon">
              <i className="fa fa-globe" aria-hidden="true"></i>
              </span>
              <label>Website</label>
              <div className="website"><a href="http://addams.sd54.org">{data.website}</a></div>
            </div>

            <div>
              <span className="icon">
                <i className="fas fa-phone"></i>
              </span>
              <label>Phone</label>
              <div className="phone">{data.phone}</div>
            </div>
            <div>
              <span className="icon">
                <i className="fas fa-fax"></i>
              </span>
              <label>Fax</label>
              <div className="fax">{data.fax}</div>
            </div>
            <div>
              <span className="icon">
                <i className="fas fa-address-card"></i>
              </span>
              <label>Address</label>
              <div className="address">{data.address}</div>
            </div>

            <hr />
          </div>
        );
      })}
    </div>
  );
}
