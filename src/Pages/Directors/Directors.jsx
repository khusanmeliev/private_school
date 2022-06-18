import React from "react";
import { directors } from "../../mock/about_dir";
import "./directors.css";

function Directors() {
  return (
    <>
      <div className="directors_page">
        <div className="directors_details">
          <div className="directors_details__title">
            Maktabimiz direktorlari haqida ma'lumot!
          </div>
          <div className="directors_details__box">
            {directors.map((info) => (
              <li key={info.id}>
                <div className="card">
                  <div className="card__img">
                    <img src={info.img} alt="" />
                  </div>
                  <div className="card__details">
                    <div className="top">
                      <div className="row">
                        <div className="left">{info.settings}</div>
                        <div className="right">
                          <ul>
                            <li>{info.name}</li>
                            <span>{info.branch}</span>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="middle">
                      <ul>
                        <li>
                          {info.email_icon}
                          <span> {info.email}</span>
                        </li>
                        <li>
                          {info.phone_icon}
                          <span>{info.phone}</span>
                        </li>
                        <li>
                          {info.address_icon}
                          <span>{info.address}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bottom">
                      <ul>
                        <li>{info.facebook_icon}</li>
                        <li>{info.telegram_icon}</li>
                        <li>{info.instagram_icon}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Directors;
