import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { RouteType } from '@/interfaces/route';

import styles from './BasicLayout.module.less';
import SelfRoute from '@/components/SelfRoute';

const { Header, Content, Sider } = Layout;

interface BasicLayoutProps {
  router?: RouteType[];
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ router }) => {
  const history = useHistory();
  const location = useLocation();

  const handleClickMenu = ({ key }: any) => {
    history.push(key);
  };

  return (
    <Layout className={styles['sdn-hub-layout']}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <h1 className={styles['sdn-hub-layout-title']}>报表采集</h1>
      </Header>
      <Layout style={{ marginTop: 64 }}>
        <Sider
          width={200}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
            onClick={handleClickMenu}
          >
            {router?.map((item) => {
              if (item.redirect || item.path === '*') {
                return null;
              }

              return (
                <Menu.Item key={item.path} icon={<UserOutlined />}>
                  {item.name}
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200, padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 'calc(100vh - 88px)',
            }}
          >
            <SelfRoute router={router} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
