<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>ADMINS</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <h1>AQUI VA LA LISTA DE USUARIOS</h1>
        <WebTable :usuario="user"></WebTable>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';
//PERSONALIZADOS
import WebTable from '@/components/table/web.vue'
import Client from '@/model/Client'

export default defineComponent({
  name: 'NewItem',
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    WebTable,
  },
  data(){
    return {
      user: []
    }
  },
  async mounted(){
    this.user = await Client.getAll()
  },
});
</script>