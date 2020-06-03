import React from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {AppBar,Toolbar} from '@material-ui/core';

function TopBar(props){
    const {classes,className,children,color} = props;
    return (
        <AppBar 
          color={color}
          position="sticky" 
          elevation={0}
          className={clsx(classes.appBar,className)}
        >
          <Toolbar>
              {children}
          </Toolbar>
        </AppBar>
    )
}

TopBar.propTypes = {
  className: PropTypes.string,
  color:PropTypes.string,
  labelname: PropTypes.string.isRequired
};

export default TopBar