import { AiFillGift, AiFillHome, AiFillPlusCircle } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { RiLogoutBoxFill } from 'react-icons/ri';
import DonationHistory from '../../Pages/DonationHistory';
import ExpandedItemPage from '../../Pages/ExpandedItemPage';
import HomePage from '../../Pages/HomePage';
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
    route: '/useritemmanagement',
    element: <UserItemManagement />,
    icon: <AiFillGift size="18px" />
  },

  {
    name: 'Doações Recebidas',
    route: '/newdonation',
    element: <DonationHistory />,
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