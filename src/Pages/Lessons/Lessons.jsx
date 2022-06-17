import React from "react";
import { courses } from "../../mock/lessons";
import "./lesson.css";

function Lesson() {
  return (
    <>
      <div className="lesson_page">
        <div className="title">Bizning darslarimiz</div>
        <div className="lesson">
          <div className="row">
            {courses.map((course) => (
              <li key={course.id}>
                <div className="box">
                  <div className="box__title"></div>
                  <div className="box__price"></div>
                  <div className="box__description"></div>
                  <div className="box__button"></div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Lesson;
