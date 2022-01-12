import { SideBar } from '../components/SideBar/SideBar';
import Navigetion from './Navigetion/Navigetion';
import Logo from '../components/Logo/Logo';

const AppBar = () => {
  return (
    <header>
      <SideBar />
      <Navigetion.NavPage />
      <Logo />
    </header>
  );
};

export default AppBar;
