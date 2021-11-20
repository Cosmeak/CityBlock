import { IonHeader, IonPage, IonTitle, IonInput, IonButton, IonLabel, IonItem, IonContent, IonToolbar } from '@ionic/react';
import '../css/style.css';

const Login: React.FC = () => {
  return (
    <IonPage>

      {/* Header of the page */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Choose your name</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content of the page */}
      <IonContent>
        <form className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput /> {/* For enter your pseudo */}
          </IonItem>
          <IonButton className="ion-margin-top" type="submit" expand="block">
            Login
          </IonButton>
        </form>
      </IonContent>

    </IonPage>
  );
};

export default Login;