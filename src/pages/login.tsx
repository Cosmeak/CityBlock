import { IonHeader, IonPage, IonTitle, IonInput, IonButton, IonLabel, IonItem, IonContent, IonToolbar, IonThumbnail, IonImg } from '@ionic/react';
import '../css/style.css';

type Item = {
  src: string;
};

type bg = {
  src: string;
};

const bg: bg[] = [{ src: 'assets/img/bg-triangle.png'}];

const items: Item[] = [{ src: 'assets/img/LogoCityBlockVectorisation.png'}];
const Login: React.FC = () => {
  return (
    <IonPage>
      
      {/* Header of the page */}

      {/* Content of the page */}
      <IonContent>
      {bg.map((image) => (
          <IonThumbnail className="h-w">
            <IonImg src={image.src} />
          </IonThumbnail>
      ))}
      {items.map((image) => (
          <IonThumbnail className="margin-center-horizontal h-w-300 absolute border5px">
            <IonImg src={image.src} />
          </IonThumbnail>
      ))}
        <form className="ion-padding absolute border5px ">
          <IonItem className='pseudo margin-center-horizontal border5px shadow-gray'>
            {/* <IonLabel >Pseudo :</IonLabel> */}
            <IonInput placeholder='Pseudo'></IonInput>{/* For enter your pseudo */}
          </IonItem>
          <IonButton className="margin-center-horizontal pissenlit border5px shadow-gray" fill='clear' type="submit" expand="block" >
            Entrer dans le jeu
          </IonButton>
          <IonButton className="admin margin-center-horizontal border5px shadow-gray " fill='clear' type="submit" expand="block" >
            Administrateur ?
          </IonButton>
        </form>
        
      </IonContent>
      

      
    </IonPage>
  );
};

export default Login;