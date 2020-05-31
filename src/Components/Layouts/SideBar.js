import React from 'react'
import clsx from 'clsx';
import {
    Drawer,
    IconButton
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';

function SideBar(props){
    const {classes,children,handleDrawerOpen,handleDrawerClose,open} = props
    return (
        <Drawer variant="permanent"  
            className={clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx(classes.drawer,{
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.drawerBack}>
                <IconButton className={clsx({[classes.hide]:!open})} onClick={()=>handleDrawerClose()}>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton className={clsx({[classes.hide]:open})} onClick={()=>handleDrawerOpen()}>
                    <MenuIcon />
                </IconButton>
            </div>
            {children}
        </Drawer>
    )
}

export default SideBar