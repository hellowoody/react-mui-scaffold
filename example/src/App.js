import React from 'react';
import {Layout} from 'react-mui-scaffold'
import {TopBar,SideBar,Content} from 'react-mui-scaffold'
import {
  Typography,
} from '@material-ui/core';
function App() {

  return (
      <Layout>
        <SideBar>
          {/* <div>菜单列</div> */}
        </SideBar>
        <TopBar color={"inherit"} >
          <Typography variant="h6" >
            woody脚手架
          </Typography>
        </TopBar>
        <Content>
          <div >this is content</div>
        </Content>
      </Layout>
  );
}

export default App;
