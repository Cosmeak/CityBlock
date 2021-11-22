import { IonPage, IonTitle, IonLabel, IonTabs, IonTabBar, IonTabButton, IonTab, IonIcon, IonRouterOutlet, IonToolbar } from '@ionic/react';
import { reloadOutline } from 'ionicons/icons';
import '../css/style.css';

const Awaiting: React.FC = () => {
    return (
        <IonPage>

            {/* Content of numbers of player who join the party */}
            <IonToolbar slot="top">
                <IonTitle className="ion-text-center flex">4/6</IonTitle>
            </IonToolbar>

            {/* Content of name of the player */}
            <IonLabel>
                <h3>Pseudo</h3>
            </IonLabel>

            <IonLabel>
                <IonIcon icon={reloadOutline} />
                <h3>Waiting for the others</h3>
            </IonLabel>

        </IonPage>
    );
};

export default Awaiting;
