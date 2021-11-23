import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import Login from './pages/login';
import Awaiting from './pages/awaiting';
import Dashboard from './pages/dashboard';
import TabsRoot from './pages/game/tabs-root';


const App: React.FC = () => ( 
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        {/* Classic path */}
        <Route path="/login" component={Login} exact={true}></Route>
        <Route path="/awaiting" component={Awaiting} exact={true}></Route>
        <Route path="/dashboard" component={Dashboard} exact={true}></Route>

        {/* Path for game tabs and interface */}
        <Route path="/game" component={TabsRoot} exact={true}></Route>

        {/* Error redirection / index */}
        <Route path="/" render={() => <Redirect to="/login" />} exact={true}></Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
