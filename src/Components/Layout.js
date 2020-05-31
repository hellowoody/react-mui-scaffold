import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles } from '@material-ui/core/styles';
import {App} from './Layouts'

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      minHeight: '100vh',
    },
    drawer: {
        width: drawerWidth,
        whiteSpace: 'nowrap',
        // backgroundColor:'#dce1ee',
        borderRight:'0px',
        flexShrink: 0,
    },
    hide: {
        display: 'none',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
    },
    drawerBack: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    appBar:{
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
}));

function Layout(props){
    const classes = useStyles()
    const {children} = props;
    const [open,setOpen] = React.useState(false)
    const handleDrawerOpen = function(){
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            {
                React.Children.map(children,(child) => {
                    if (child.type.name === "SideBar") {
                        return React.cloneElement(child,{
                            'classes':{
                                "hide":classes.hide,
                                "drawer":classes.drawer,
                                "drawerOpen":classes.drawerOpen,
                                "drawerClose":classes.drawerClose,
                                "drawerBack":classes.drawerBack,
                            },
                            'PaperProps':{ style: { width: drawerWidth  }} ,
                            'handleDrawerClose':handleDrawerClose,
                            'handleDrawerOpen':handleDrawerOpen,
                            'open':open,
                        });
                    }
                    return null
                })
            }
            <App classes={{"root":classes.app}}>
                {
                    React.Children.map(children,(child) => {
                        if (child.type.name === "TopBar") {
                            return React.cloneElement(child,{
                                'classes':{
                                    "appBar":classes.appBar,
                                },
                            });
                        }
                        if (child.type.name !== "SideBar" && child.type.name !== "TopBar") {
                            return React.cloneElement(child);
                        }
                        return null
                    })
                }
            </App>
        </div>
    )   
}

export default Layout