import React from "react";

import AboutUs from "./AboutUs/AboutUs";
import MainFon from "./MainFon/MainFon";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageCarousel from "../../components/ImageCarousel";
import MarqueeText from "../../components/MarqueeText";
import TemplateReview from "../../components/TemplateReview";
import VacanciesCards from "../../components/VacanciesCards";
// import FormAppear from "../../components/FormAppear";

const HomePage = () => {
  return (
    <>
      <Header />
      <MainFon />
      <AboutUs />
      <MarqueeText />
      <VacanciesCards enablePagination={false}/>
      <MarqueeText />
      <TemplateReview />
      <MarqueeText />
      <ImageCarousel />
      <Form />
      <Footer />
      {/* <FormAppear /> */}
    </>
  );
};

export default HomePage;
