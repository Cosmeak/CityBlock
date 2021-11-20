import { IonPage, IonTitle, IonInput, IonButton, IonLabel, IonItem } from '@ionic/react';
import '../css/style.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonTitle>Choose your name</IonTitle>
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

export default Login;