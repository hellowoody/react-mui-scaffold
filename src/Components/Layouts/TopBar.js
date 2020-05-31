import React from 'react'
import clsx from 'clsx';
import {AppBar,Toolbar} from '@material-ui/core';

function TopBar(props){
    const { classes,children,color} = props;
    return (
        <AppBar 
          color={color}
          position="sticky" 
          elevation={0}
          className={clsx(classes.appBar)}
        >
          <Toolbar>
              {children}
          </Toolbar>
        </AppBar>
    )
}

export default TopBar