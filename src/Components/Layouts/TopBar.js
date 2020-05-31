import React from 'react'
import clsx from 'clsx';
import {AppBar,Toolbar,IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function TopBar(props){
    const { classes,children,open,handleDrawerOpen,color} = props;
    return (
        <AppBar 
          color={color}
          position="fixed" 
          elevation={0}
          className={clsx(classes.appBar,{
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar style={{paddingLeft:16}}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx({
                      [classes.hide]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
              {children}
          </Toolbar>
        </AppBar>
    )
}

export default TopBar