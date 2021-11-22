import React from 'react';
import { IonPage, IonTitle, IonLabel, IonTabs, IonTabBar, IonTabButton, IonTab, IonIcon, IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import {  personCircle, map, informationCircle } from 'ionicons/icons';
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
                
                    <IonTabButton tab="Me">
                        <IonIcon icon={personCircle} />
                        <IonLabel>Me</IonLabel>
                    </IonTabButton>
                
                    <IonTabButton tab="Board">
                        <IonIcon icon={map} />
                        <IonLabel>Board</IonLabel>
                    </IonTabButton>
                
                    <IonTabButton tab="Rules">
                        <IonIcon icon={informationCircle} />
                        <IonLabel>Rules</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>

        </IonPage>
    );
};

export default Game;
