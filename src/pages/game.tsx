import { IonPage, IonTitle, IonLabel, IonTabs, IonTabBar, IonTabButton, IonTab, IonIcon, IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { construct, informationCircle, gameController } from 'ionicons/icons';
import '../css/style.css';

const Game: React.FC = () => {
	return (
		<IonPage>

			{/* Content of tab info */}
			<IonTab tab="info">
				<h1>Info</h1>
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

export default Game;
