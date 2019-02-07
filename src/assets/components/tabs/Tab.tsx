import * as React from 'react';
import { Link } from 'react-router-dom';

class Tab extends React.Component{

    public render(){
        return(
            <div className="Tab">
                <Link to="/user"> User </Link>
                <Link to="/map"> Map </Link>
            </div>
        )
    }
}


export default Tab;