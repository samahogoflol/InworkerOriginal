import React, { useEffect, useState } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import { vacancies } from "../../constants";

import "./vacanciesCards.css";

const VacanciesCards = ({ enablePagination = true }) => {
  const [visibleVacancies, setVisibleVacancies] = useState(6);

  function downloadMoreVacancies() {
    setVisibleVacancies((prevCount) => Math.min(prevCount + 6, vacancies.length));
  }

  return (
    <>
      <form className="form_reset">
        <input type="text" name="nameVacancy" placeholder="Назва вакансії" />
        <input type="text" name="cityVacancy" placeholder="Назва міста" />
        <select name="contractVacancy">
          <option label="Виберіть трудовий договір" disabled selected></option>
          <option label=""></option>
          <option label="Umowa zlecenie" value={"Umowa zlecenie"}></option>
          <option label="Umowa o pracę" value={"Umowa o pracę"}></option>
        </select>
      </form>

      <h2 className="header_vacancy">Доступні вакансії</h2>
      <div className="vacancy_grid">
        {vacancies.slice(0, visibleVacancies).map((vacancy, index) => (
          <div key={index} className="vacancy">
            <div className="card">
              <div className="img">
                <img src={vacancy.img.vacancyFoto} alt={vacancy.title} className="vacancy-image" />
              </div>
              <div className="title">
                <h3>{vacancy.title}</h3>
              </div>
              <div className="card_discription">
                <ul className="discription_list">
                  <li>
                    <span className="span_discroption">Заробітна плата : </span>
                    {vacancy.contract === "Umowa o pracę" ? vacancy.salary.salaryPerMonth : vacancy.salary.salaryPerHour}
                  </li>
                  <li>
                    <span className="span_discroption">Графік :</span> {vacancy.workingHours}
                  </li>
                  <li>
                    <span className="span_discroption">Трудовий договір :</span> {vacancy.contract}
                  </li>
                  <li>
                    <span className="span_discroption">Проживання :</span> {vacancy.hostel}
                  </li>
                  <li>
                    <span className="span_discroption">Місто праці :</span> {vacancy.city}
                  </li>
                </ul>
              </div>
              <Link to={`/vacancies/${vacancy.id}`}>
                <button className="btn">Переглянути вакансію</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {enablePagination ? (
        <button onClick={downloadMoreVacancies} className="see_more_vacancies">
          Загрузити ще вакансії
        </button>
      ) : (
        <NavLink end to="/vacancies">
          <button className="btn_look_all_vacancion">Переглянути всі вакансії</button>
        </NavLink>
      )}
    </>
  );
};

export default VacanciesCards;
