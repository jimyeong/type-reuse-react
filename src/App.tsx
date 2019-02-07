import * as React from 'react';
import { Router, Switch, Route } from 'react-router';
import Btn from './assets/components/tabs/btns/Btn';
import Users from './assets/components/presentational/Users';
import Map from './assets/components/presentational/Map';
import {history, navigate} from './assets/components/helper/HistoryHelper';






class App extends React.Component {

    public render(){
        return(
            <Router history={ history }>
                <div>
                    <div className="wrapper">
                        hello world

                        <Btn
                            onClick={() => navigate('/')}
                            btnName="home"
                            className="btn-home"
                        />
                        <Btn
                            onClick={() => navigate('/user')}
                            btnName="user"
                            className="btn-test"
                        />
                        <Btn
                            onClick={() => navigate('/map')}
                            btnName="map"
                            className="btn-test"
                        />
                        <Switch>
                            <Route path="/user" render={() => <Users/>}/>
                            <Route path="/map" render={() => <Map/>}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}



















export default App;

