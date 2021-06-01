/*
    this file shows the information of one vehicle inside a list
*/

import React from "react";
import Truncate from "./helpers/Truncate";
import { Link } from "react-router-dom";
import "./style/VehicleComponent.css";
import {Row} from 'antd'

const VehicleComponent = ({ vehicle }) => {
  const renderSwitch = (status) => {
    switch (status) {
      case "available":
        return <p className="status available">Prete</p>;
      case "allocated":
        return <p className="status allocated">En cours</p>;
      case "stopped":
        return <p className="status unavailable">Hors service</p>;
      default:
        return <p className="status default">Maintenance</p>;
    }
  };
  let link;
  vehicle.idrental
    ? (link = `/tracking/${vehicle.idVehicle}/${vehicle.idrental}`)
    : (link = null);
  console.log(link);
  return (
    <>

      {link ? (
        <Link to={link} className="">
          <li className="vehicle-elem">
            <div>
              <img id="vehicle-img" src={vehicle.image} />
              <div className="custom-elem vehicle-type">
                <p>
                  {vehicle.vehiclebrand
                    ? Truncate(vehicle.vehiclebrand, 10)
                    : "-"}
                </p>
                <p>
                  {vehicle.vehiclebrand
                    ? Truncate(vehicle.vehicletype, 10)
                    : "-"}
                </p>
              </div>
            </div>
            <div className="custom-elem">
              <p>{vehicle.firstname ? vehicle.firstname : "-"}</p>
              <p>
                {vehicle.rentaldate ? vehicle.rentaldate.slice(0, 10) : "-"}
              </p>
            </div>
            <div className="custom-elem">
              <p>
                {vehicle.availibledate
                  ? vehicle.availibledate.slice(0, 10)
                  : "-"}
              </p>
              <p>
                {vehicle.availibledate
                  ? vehicle.availibledate.slice(11, 19)
                  : "-"}
              </p>
            </div>
            {renderSwitch(vehicle.availibility)}
          </li>
        </Link>
      ) : (
        <li className="vehicle-elem">
          <div>
            <img id="vehicle-img" src={vehicle.image} />
            <div className="custom-elem vehicle-type">
              <p>
                {vehicle.vehiclebrand
                  ? Truncate(vehicle.vehiclebrand, 10)
                  : "-"}
              </p>
              <p>
                {vehicle.vehiclebrand ? Truncate(vehicle.vehicletype, 10) : "-"}
              </p>
            </div>
          </div>
          <div className="custom-elem">
            <p>{vehicle.firstname ? vehicle.firstname : "-"}</p>
            <p>{vehicle.rentaldate ? vehicle.rentaldate.slice(0, 10) : "-"}</p>
          </div>
          <div className="custom-elem">
            <p>
              {vehicle.availibledate ? vehicle.availibledate.slice(0, 10) : "-"}
            </p>
            <p>
              {vehicle.availibledate
                ? vehicle.availibledate.slice(11, 19)
                : "-"}
            </p>
          </div>
          {renderSwitch(vehicle.availibility)}
        </li>
      )}

    </>
  );
};

export default VehicleComponent;
