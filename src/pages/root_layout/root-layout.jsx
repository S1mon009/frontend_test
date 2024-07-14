import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { ToastContainer } from "react-toast";

const RootLayout = () => {
  const [showName, setShowName] = useState(false);

  function handleShowName() {
    setShowName(!showName);
  }

  return (
    <>
      <Header showName={showName} />
      <ToastContainer
        position="top-right"
        delay={6000}
        className="root-layout__toast-container"
      />
      <Outlet />
      <Footer handleShowName={handleShowName} />
    </>
  );
};

export default RootLayout;
