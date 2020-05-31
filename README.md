# react-mui-scaffold

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-mui-scaffold.svg)](https://www.npmjs.com/package/react-mui-scaffold) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-mui-scaffold
```

## Usage

```jsx
import React from 'react';
import {Layout} from 'react-mui-scaffold'
import {TopBar,SideBar,Content} from 'react-mui-scaffold'
import {
  Typography,
} from '@material-ui/core';
export default function App() {

  return (
      <Layout>
        <SideBar>
          {/* <div>菜单列</div> */}
        </SideBar>
        <TopBar color={"inherit"} >
          <Typography variant="h6" >
            woody scaffold 脚手架
          </Typography>
        </TopBar>
        <Content>
          <div >this is content</div>
        </Content>
      </Layout>
  );
}
```

## License

MIT © [woodyhello](https://github.com/woodyhello)
