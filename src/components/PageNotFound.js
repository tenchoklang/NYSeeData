import React from 'react';//relative path
import {Link} from 'react-router-dom'

const PageNotFound = () => (
    <div>
        Error page not found
        <Link to="/">Go Home</Link>
    </div>
);

export default PageNotFound;