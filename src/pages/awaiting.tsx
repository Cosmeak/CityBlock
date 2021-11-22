import { IonPage, IonTitle, IonLabel, IonTabs, IonTabBar, IonTabButton, IonTab, IonIcon, IonRouterOutlet, IonToolbar } from '@ionic/react';
import { reloadOutline } from 'ionicons/icons';
import '../css/style.css';

const Awaiting: React.FC = () => {
    return (
        <IonPage className="awaiting">
            <div className="awaiting-content">
                {/* Content of numbers of player who join the party */}
                <IonLabel className="awaiting-title">
                    <h1>4/6</h1>
                </IonLabel>

                {/* Content of name of the player */}
                <IonLabel className="awaiting-pseudo">
                    <p>Pseudo</p>
                </IonLabel>

                {/* content of waiting animation */}
                <IonLabel className="awaiting-icon">
                    <IonIcon className="awaiting-icon-content" size="large" icon={reloadOutline} />
                    <h2>Waiting for the others...</h2>
                </IonLabel>
            </div>

        </IonPage>
    );
};

export default Awaiting;
