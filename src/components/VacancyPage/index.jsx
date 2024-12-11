import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { vacancies } from "../../constants";
import ImageCarousel from "../ImageCarousel";
import Header from "../Header";
import Footer from "../Footer";
import MarqueeText from "../MarqueeText";
import SimpleModal from "../ModalWindow";

import "./vacancyPage.css";

const VacancyPage = () => {
  const star = <div className="star"></div>;

  const { vacancyId } = useParams();

  const currentVacancy = vacancies.find((vacancy) => vacancy.id === Number(vacancyId));

  const [modalWindowOpen, setModalWindowOpen] = useState(false);

  const handleClose = () => {
    setModalWindowOpen(false)
  }

  return (
    <>
      <Header />
      {currentVacancy ? (
        <>
          <div className="single_page_header">
            <div className="single_page_foto">
              <img className="vacancy_image" src={currentVacancy.img.vacancyFoto} alt={currentVacancy.title} />
            </div>
            <h3>{currentVacancy.pageTitle}</h3>
          </div>
          <div className="single_page">
            <div className="single_page_left_side">
              <section>
                <h3>Фото з житла</h3>
                <p>Варіант житла з минулих заїздів наших клієнтів</p>
              </section>
              <div className="hostel_foto_carousel">
                <ImageCarousel images={currentVacancy.img.hostelFoto} customClass="center-buttons-carousel" />
              </div>
              <section>
                <h3>Відгукнутись на вакансію</h3>
                <p>Залиште Ваші данні, та наш менеджер зв’яжеться з Вами !</p>
              </section>
              <form className="single_page_form">
                <label for="Введіть ім'я">Введіть Ваше ім’я</label>
                <input type="text" id="Введіть ім'я" />
                <label for="Введіть номер телефону">Номер телефону</label>
                <input type="text" id="Введіть номер телефону" placeholder="Введіть номер телефону з кодом країни (+380...)" />
                <button>Залишити заявку</button>
              </form>
            </div>
            <div className="single_page_right_side">
              <p>{currentVacancy.aboutCompany}</p>
              <div className="full_description">
                <p className="title_short_about_header">
                  🏢 <span style={{ fontWeight: "bolder" }}>Коротко про основне :</span>
                </p>

                <ul className="description_short_about_header">
                  <li>Місто : {currentVacancy.city}</li>
                  <li>Трудовий договір : {currentVacancy.contract}</li>
                  <li>Проживання : {currentVacancy.hostel}</li>
                  <li>Ставка : {currentVacancy.salary.salaryPerMonth}</li>
                  <li>Графік : {currentVacancy.workingHours}</li>
                  <li>Робочий одяг : {currentVacancy.requirements.added}</li>
                </ul>

                <p className="title_short_about_header">
                  🏢 <span style={{ fontWeight: "bolder" }}>Заробітна плата :</span>
                </p>

                <ul className="description_short_about_header">
                  <li>
                    Ставка :{" "}
                    {currentVacancy.contract === "Umowa o pracę"
                      ? currentVacancy.salary.salaryPerMonth
                      : currentVacancy.salary.salaryPerHour}
                  </li>

                  {currentVacancy.salary.nigth ? (
                    <>
                      <li>Нічні зміни : {currentVacancy.salary.nigth}</li>
                      <li>Надгодини : {currentVacancy.salary.overtime}</li>
                      <li>Робота в вихідні та святкові дні : {currentVacancy.salary.weekendWork}</li>
                    </>
                  ) : (
                    <></>
                  )}

                  <li>Премії : {currentVacancy.premiums}</li>
                </ul>

                <p className="title_short_about_header">
                  🏢 <span style={{ fontWeight: "bolder" }}>Обов'язки :</span>
                </p>

                <ul className="description_short_about_header">
                  <li>{currentVacancy.responsibilities.firstProcess}</li>
                  <li>{currentVacancy.responsibilities.secondProcess}</li>
                </ul>

                <p className="title_short_about_header">
                  🏢 <span style={{ fontWeight: "bolder" }}>Вимоги :</span>
                </p>

                <ul className="description_short_about_header">
                  <li>Для кого робота : {currentVacancy.requirements.gender}</li>
                  <li>Досвід роботи : {currentVacancy.requirements.expirience}</li>
                  <li>Знання Польської мови : {currentVacancy.requirements.proficiency}</li>
                </ul>
              </div>
            </div>
          </div>

          <MarqueeText />
          <div className="carousel_and_leave_form">
            <div className="single_vacancy_footer">
              <h2>Відгуки на вакансію {currentVacancy.name}</h2>

              <div className="rewievsFon">
                <div className="name_and_date_review">
                  <h3>{currentVacancy.rewievs.name}</h3>
                  <h3>{currentVacancy.rewievs.date}</h3>
                </div>

                <div className="star_content">
                  {[...Array(5)].map((_, item) => {
                    return (
                      <span key={item} className="star_raiting">
                        {star}
                      </span>
                    );
                  })}
                </div>
                <div className="text_review">
                  <p>{currentVacancy.rewievs.review}</p>
                </div>
                <div className="rewievs_carousel">
                  <ImageCarousel images={currentVacancy.reviews} customClass="center-buttons-carousel_rewievs" />
                </div>
              </div>
            </div>
            <div className="please_leave_rewiev">
              <section>
                <h2>Ваша думка важлива для наc</h2>
                <p>
                  Ми цінуємо кожну думку, адже ваші слова <br />
                  надихають нас ставати кращими.
                  <br /> Поділіться своїм враженням та допоможіть
                  <br /> іншим зробити правильний вибір. <br />
                  Ваш відгук не лише допомагає нам удосконалюватися,
                  <br /> але й може стати тим самим поштовхом
                  <br /> для когось іншого, хто шукає своє рішення.
                </p>
              </section>
              <div>
                <h3>Ваш відгук Ви можете лишити, натиснувшки кнопку нижче :</h3>
                <button className="modal_show_btn" onClick={() => setModalWindowOpen(true)}>
                  Залишити відгук
                </button>
                <SimpleModal isOpen={modalWindowOpen} handleClose={handleClose} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Link path="/vacancies"></Link>
      )}
      <Footer />
    </>
  );
};

export { VacancyPage };
