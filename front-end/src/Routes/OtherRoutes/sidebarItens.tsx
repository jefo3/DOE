import { AiFillGift, AiFillHome, AiFillPlusCircle } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { RiLogoutBoxFill } from 'react-icons/ri';
import HomePage from '../../Pages/HomePage';
import MyDonations from '../../Pages/MyDonations';
import NewDonationPage from '../../Pages/NewDonationPage';
import UserInfoPage from '../../Pages/UserInfoPage';
import UserItemManagement from '../../Pages/UserItemManagement';

const SidebarItems = [
  {
    name: 'Home',
    route: '/',
    element: <HomePage />,
    icon: <AiFillHome size="18px" />
  },

  {
    name: 'Minhas Doações',
    route: '/mydonations',
    element: <MyDonations />,
    icon: <AiFillGift size="18px" />
  },

  {
    name: 'Doações Recebidas',
    route: '/newdonation',
    element: <NewDonationPage />,
    icon: <AiFillPlusCircle size="18px" />
  },

  {
    name: 'Perfil',
    route: '/userinfo',
    element: <UserInfoPage />,
    icon: <FaUserAlt size="18px" />
  },

  {
    name: 'Sair',
    route: '/',
    element: (<></>),
    icon: <RiLogoutBoxFill size="18" />,
    onClick: 'logout'
  }
];

export default SidebarItems;
