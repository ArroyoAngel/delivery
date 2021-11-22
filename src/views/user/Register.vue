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
              </ion-item><ion-item>
                <ion-label  position="floating">Telefono:</ion-label>
                <ion-input @input="phone=$event.target.value" type="text"/>
              </ion-item><ion-item>
                <ion-label  position="floating">Género:</ion-label>
                <ion-input @input="gender=$event.target.value" type="text"/>
              </ion-item><ion-item>
                <ion-label  position="floating">Dirección:</ion-label>
              <ion-input @input="location=$event.target.value" type="text"/>
              </ion-item><ion-item>
                <ion-label  position="floating">Correo:</ion-label>
                <ion-input @input="email=$event.target.value" type="text" value="luis@gmail.co"/>
              </ion-item><ion-item>
                <ion-label  position="floating">Contraseña:</ion-label>
                <ion-input @input="password=$event.target.value" type="text" value="luis12"/>
              </ion-item>
              <ion-item>
                <ion-label  position="floating">Repita la contraseña:</ion-label>
                <ion-input @input="rpassword=$event.target.value" type="text"/>
              </ion-item>
            </ion-card-content>
            <ion-card-content>
              <ion-button type="button"  @click="onSubmit">Registrarse</ion-button>
              <ion-button type="button"  @click="onSubmitToGoogle">Google</ion-button>
            </ion-card-content>
          </ion-card>
        </form>
      </ion-col>
      <ion-col size-sm="3"></ion-col>
    </ion-row>
  </ion-page>
</template>
<script>
  import { IonPage } from '@ionic/vue';
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
        email: '',
        password: '',
        rpassword: '',
      }
    },
    methods: {
      async onSubmit(){
        await Client.register(
          "byemail",
          {
            name: this.name,
            lastname: this.lastname,
            age: this.age,
            phone: this.phone,
            gender: this.gender,
            location: this.location,
            email: this.email,
            password: this.password,
            rpassword: this.rpassword,
          },
          {
            email: this.email, 
            password: this.password,
          }
        ).then((response)=>{
          alert(response.message)
        })
      },
      async onSubmitToGoogle(){
        await Client.register("google").then((response)=>{
          alert(response.message)
        })
      }
    }
  }
</script>