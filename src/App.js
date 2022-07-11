import Layout, { Content } from 'antd/lib/layout/layout';

import { AppHeader } from './components/AppHeader/AppHeader';
import { About } from './containers/About/About';

import './App.less';

function App() {
  return (
    <Layout>
      <AppHeader />
      <Content>
        <About />
      </Content>
    </Layout>
  );
}

export default App;
