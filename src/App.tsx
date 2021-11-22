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
import TabsRoot from './pages/tabs-root';
import BoardTab from './pages/tab-board';
import ResourcesTab from './pages/tab-resources';
import RulesTab from './pages/tab-rules';

const App: React.FC = () => ( 
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        {/* Classic path */}
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/awaiting" component={Awaiting}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>

        {/* Path for game tabs and interface */}
        <Route exact path="/game" component={TabsRoot}></Route>
        
        <Route exact path="/game/resources" component={ResourcesTab}></Route>
        <Route exact path="/game/board" component={BoardTab}></Route>
        <Route exact path="/game/Rules" component={RulesTab}></Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
