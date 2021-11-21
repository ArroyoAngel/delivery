<template>
  <ion-page>
    <ion-menu content-id="main-content" type="overlay">
      <ion-content>
        <ion-list id="inbox-list">
          <ion-list-header>Inbox</ion-list-header>
          <ion-note>hi@ionicframework.com</ion-note>
          <ion-menu-toggle auto-hide="false" :key="i">
            <ion-item @click="selectedIndex = 1" router-direction="root" router-link="/app/home" lines="none" detail="false" class="hydrated" :class="{ selected: selectedIndex === 1 }">
              <ion-label>HOME</ion-label>
            </ion-item>
            <ion-item @click="selectedIndex = 2" router-direction="root" router-link="/app/food" lines="none" detail="false" class="hydrated" :class="{ selected: selectedIndex === 2 }">
              <ion-label>FOOD</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>
    
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>HOLA MUNDO</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="false">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonRouterOutlet,
IonItem,IonLabel,IonList,IonListHeader,IonMenu,IonMenuToggle,IonNote,
} from '@ionic/vue';

export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonRouterOutlet,
    /*TESTEANDO*/
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>