import React from 'react'

export default ({classes,children}) =>
    <React.Fragment>
        <div className={classes.topbox}></div>
        {children}
    </React.Fragment>