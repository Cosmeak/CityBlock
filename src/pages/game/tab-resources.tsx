import { IonContent, IonHeader, IonPage, IonTab, IonTitle, IonToolbar } from '@ionic/react';

const ResourcesTab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>My Resources</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent style={{backgroundColor: 'green'}}>
                Tab resources content
            </IonContent>
        </IonPage>
    );
};

export default ResourcesTab;