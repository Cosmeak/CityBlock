import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonInput type="text" placeholder="Pseudo"></IonInput>
        <IonButton>Entrer dans le jeu</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
