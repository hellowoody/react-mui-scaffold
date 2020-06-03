import React from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
    Drawer,
    IconButton
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';

function SideBar(props){
    const {classes,DrawerClass,IconButtonClass,children,handleDrawerOpen,handleDrawerClose,open} = props
    return (
        <Drawer variant="permanent"  
            className={clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx(classes.drawer,DrawerClass,{
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.drawerToggle}>
                <IconButton className={clsx(IconButtonClass,{[classes.hide]:!open})} onClick={()=>handleDrawerClose()}>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton className={clsx(IconButtonClass,{[classes.hide]:open})} onClick={()=>handleDrawerOpen()}>
                    <MenuIcon />
                </IconButton>
            </div>
            {children}
        </Drawer>
    )
}

SideBar.propTypes = {
    DrawerClass: PropTypes.string,
    IconButtonClass: PropTypes.string,
    labelname: PropTypes.string.isRequired
};

export default SideBar