import React from "react";

import VacanciesCards from "../../components/VacanciesCards";
import Header from "../../components/Header";

const PageAllVacancies = () => {
  return (
    <>
      <Header />
      <VacanciesCards enablePagination={true} />
    </>
  );
};

export default PageAllVacancies;
