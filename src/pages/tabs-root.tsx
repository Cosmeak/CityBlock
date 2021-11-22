import { IonPage, IonTitle, IonLabel, IonTabs, IonTabBar, IonTabButton, IonTab, IonIcon, IonRouterOutlet, IonContent } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { construct, informationCircle, gameController } from 'ionicons/icons';
import '../css/style.css';

const TabsRoot: React.FC = () => {
	return (
		<IonPage>

			{/* Content of tab info */}
			<IonTab tab="info">
				<IonContent fullscreen>
					<h1 color="white">Info</h1>
				</IonContent>
			</IonTab>

			{/* Content of tab board (main vue) */}
			<IonTab tab="board">
			
			</IonTab>

			{/* Page of all game rules */}
			<IonTab tab="rules">

			</IonTab>

			{/* Navigation tab (bottom of screen) */}
			<IonTabs>

				<IonRouterOutlet>
					<Route path="/"></Route>
				</IonRouterOutlet>

				<IonTabBar slot="bottom">

					<IonTabButton tab="my-resources">
						<IonIcon icon={construct} />
						<IonLabel>My resources</IonLabel>
					</IonTabButton>

					<IonTabButton tab="board">
						<IonIcon icon={gameController} />
						<IonLabel>Board</IonLabel>
					</IonTabButton>

					<IonTabButton tab="rules-informations">
						<IonIcon icon={informationCircle} />
						<IonLabel>Rules / Informations</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>

		</IonPage>
	);
};

export default TabsRoot;
