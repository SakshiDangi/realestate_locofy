import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import RentSaleCardForm1 from "../components/rent-sale-card-form1";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your perfect Home" />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start text-center text-33xl text-gray-white font-body-regular-400">
        <Header />
        <div className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top]">
          <div className="self-stretch flex flex-col items-center justify-center max-w-[95%px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
              <div className="self-stretch relative leading-[72px] font-semibold">
                Find Your Dream Home
              </div>
              <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Proin sodales ultrices nulla blandit
                volutpat.
              </div>
            </div>
          </div>
        </div>
        <RentSaleCardForm1 />
        <AreaContainer />
        <FeatureContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
