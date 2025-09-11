// Components
import MainHeader from "./sections/main-header";
// import NavSection from "./nav-section";

// Styles
import style from "./styles/header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <MainHeader />
      {/* <NavSection /> */}
    </header>
  );
};

export default Header;
