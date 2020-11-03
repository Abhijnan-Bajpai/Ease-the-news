import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme)=>
({
  
    root : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        height : '100vh',
    },

    title : {
        textAlign :'center',
    },

    container :{
        //backgroundColor: 'rgba(228,229,237,0.5)',
        color: '#2E2C6',
        textAlign :'center',
        fontSize : '1.5rem',
    },

    down: {
        color : '#2E2C26',
        fontSize : '8rem',
    },
}));

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked]=useState(false);
    useEffect(()=> {
        setChecked(true);
    },[]);
    return(
        <div className={classes.root}>
        <Collapse
        in={checked}
        {...(true ? { timeout:2000}:{})}
        collapseHeight={50}>
        <div className={classes.container}>
            <h1 classNmae={classes.title}> Sign up < br/>
            for<br/>
            Clutter free News</h1>
            <IconButton>
                <ExpandMoreIcon className={classes.down}/>
            </IconButton>
        </div>
        </Collapse>
        </div>
    );
}