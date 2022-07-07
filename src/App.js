import Layout, { Content } from 'antd/lib/layout/layout';

import { AppHeader } from './components/AppHeader/AppHeader';
import { About } from './containers/About/About';
import { AppFooter } from './components/AppFooter/AppFooter';

import './App.less';

function App() {
  return (
    <Layout>
      <AppHeader />
      <Content>
        <About />
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default App;
