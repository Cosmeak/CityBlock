import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonItem, IonCheckbox } from '@ionic/react';
import '../css/style.css';

const Game: React.FC = () => {
    return (
        <IonPage>
            <IonTitle>Game</IonTitle>
        </IonPage>
    );
};

const Info: React.FC = () => {
    return (
        <IonPage>
            <IonTitle>Information</IonTitle>
        </IonPage>
    );
};

const Rules: React.FC = () => {
    return (
        <IonPage>
            <IonTitle>Rules</IonTitle>
        </IonPage>
    );
};

export default Game;
