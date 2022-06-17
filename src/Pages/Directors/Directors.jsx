import React from "react";
import { directors } from "../../mock/about_dir";
import "./directors.css";

function Directors() {
  return (
    <>
      <div className="directors_page">
        <div className="branches">
          <div className="branches__title">Filiallarimiz haqida</div>
          <div className="branches__btn">
            <button>Mirobod filiali</button>
            <button>Olmazor filiali</button>
          </div>
        </div>
        <div className="directors_details">
          <div className="directors_details__title">
            Maktabimiz direktorlari haqida ma'lumot!
          </div>
          <div className="directors_details__box">
            {directors.map((info) => (
              <li key={info.id}>
                <div className="boxes">
                  <div className="boxes__img">
                    <img src={info.img} alt="" />
                  </div>
                  <div className="boxes__details">
                    <div className="boxes__details__box">
                      <div className="top">
                        <div className="row">
                          <div className="left"></div>
                          <div className="right"></div>
                        </div>
                      </div>
                      <div className="middle"></div>
                      <div className="bottom"></div>
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
