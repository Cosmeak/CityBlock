import { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet } from '@ionic/react';
import { construct, informationCircle, gameController } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';

import BoardTab from './tab-board';
import ResourcesTab from './tab-resources';
import RulesTab from './tab-rules';

function TabsRoot() {
	return (
		<IonTabs>

			<IonRouterOutlet>
				<Route path="/game/resources" component={ResourcesTab} exact={true}></Route>
        <Route path="/game/board" component={BoardTab} exact={true}></Route>
        <Route path="/game/rules" component={RulesTab} exact={true}></Route>

				<Route path="/game" render={() => <Redirect to="/game/board" />} />
			</IonRouterOutlet>

			<IonTabBar slot="bottom">

				<IonTabButton tab="resources" href="/game/resources">
					<IonIcon icon={construct} />
					<IonLabel>My resources</IonLabel>
				</IonTabButton>

				<IonTabButton tab="board" href="/game/board">
					<IonIcon icon={gameController} />
					<IonLabel>Board</IonLabel>
				</IonTabButton>

				<IonTabButton tab="rules-informations" href="/game/rules">
					<IonIcon icon={informationCircle} />
					<IonLabel>Rules / Informations</IonLabel>
				</IonTabButton>

			</IonTabBar>
		</IonTabs>
	);
};

export default TabsRoot;
