import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Link, Route, Routes
} from 'react-router-dom';
import { motion } from 'framer-motion';
import { Col, Container as ContainerBootstrap, Row } from 'react-bootstrap';
import { MenuNavWrapper, MenuNavItem, Container } from './styles';
import { useAuth } from '../../Store/Context/authContext';
import SidebarItems from './sidebarItens';
import Logo from '../../Images/logo.png';
import ExpandedItemPage from '../../Pages/ExpandedItemPage';

const OtherRoutes: React.FC = () => {
  const { LogOut } = useAuth();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [pageActive, setPageActive] = useState<number>(1);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const ismobile = window.innerWidth < 1200;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);

  return (
    <BrowserRouter>
      <Row cols={2} style={{ margin: 0 }}>
        <Col md={3}>
          <Container>
            <img src={Logo} alt="Logo" width={isMobile ? 50 : 150} height={isMobile ? 50 : 150} />
            <MenuNavWrapper pageActive={pageActive}>
              {SidebarItems.map((item, i) => (
                <MenuNavItem key={item.name}>
                  <Link
                    to={item.route}
                    onClick={item.onClick ? LogOut : () => setPageActive(i + 1)}
                  >
                    {item.icon}
                    {isMobile ? '' : item.name}
                  </Link>
                </MenuNavItem>
              ))}
            </MenuNavWrapper>
          </Container>
        </Col>
        <Col
          md={9}
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, padding: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.25 }}
        >

          <div style={{ marginLeft: '-6.5%', padding: '10px', backgroundColor: '#F4F4F4' }}>
            <Routes>
              {SidebarItems.map((item) => (
                <Route key={item.name} path={item.route} element={item.element} />
              ))}
              <Route key="Expanded Item" path="/expandeditem" element={<ExpandedItemPage />} />
            </Routes>
          </div>

        </Col>
      </Row>
    </BrowserRouter>
  );
};

export default OtherRoutes;
