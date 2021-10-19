import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonItem, IonCheckbox } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <form className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput />
        </IonItem>
        <IonButton className="ion-margin-top" type="submit" expand="block">
          Login
        </IonButton>
      </form>
    </IonPage>
  );
};

export default Home;
