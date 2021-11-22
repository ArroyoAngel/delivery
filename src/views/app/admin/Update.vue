<template>
  <ion-page>
    <ion-row>
      <ion-col size-sm="3"></ion-col>
      <ion-col size-sm="6">
        <form>
          <ion-card>
            <ion-card-header align="center">
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-label  position="floating">Nombre:</ion-label>
                <ion-input @input="name=$event.target.value" type="text"/>
              </ion-item>
              <ion-item>
                <ion-label  position="floating">Apellido:</ion-label>
                <ion-input @input="lastname=$event.target.value" type="text"/>
              </ion-item>
              <ion-item>
                <ion-label  position="floating">Fecha de nacimiento:</ion-label>
                <ion-input @input="age=$event.target.value" type="text"/>
              </ion-item>
              <ion-item>
                <ion-label  position="floating">Telefono:</ion-label>
                <ion-input @input="phone=$event.target.value" type="text"/>
              </ion-item>
              <ion-item>
                <ion-label  position="floating">Género:</ion-label>
                <ion-input @input="gender=$event.target.value" type="text"/>
              </ion-item>
              <ion-item>
                <ion-label  position="floating">Dirección:</ion-label>
                <ion-input @input="location=$event.target.value" type="text"/>
              </ion-item>
            </ion-card-content>
            <ion-card-content>
              <ion-button type="button" href="/app/users"  @click="update">Actualizar</ion-button>
            </ion-card-content>
          </ion-card>
        </form>
      </ion-col>
      <ion-col size-sm="3"></ion-col>
    </ion-row>
  </ion-page>
</template>
<script>
  //import { createAccountByEmail } from '@/helpers/firebase'
  import { IonPage } from '@ionic/vue'
  import Client from '@/model/Client'
  export default {
    name: 'Register',
    components: {
      IonPage,
    },
    data(){
      return {
        name: '',
        lastname: '',
        age: '',
        phone: '',
        gender: '',
        location: '',
      }
    },
    methods: {
      async update(){
        const payload = {
            name: this.name,
            lastname: this.lastname,
            age: this.age,
            phone: this.phone,
            gender: this.gender,
            location: this.location,
        }
        Client.update(payload, this.$route.params.id)
      },
    }
  }
</script>