<template>
  <ion-page>
    <ion-row>
      <ion-col size-sm="3" size-xs="0"></ion-col>
        <ion-col size-sm="6" size-xs="12">
          <form  >
          <ion-card>
            <ion-card-header align="center">
              <h1>LOGIN</h1>
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-label position="floating">Correo:</ion-label>
                <ion-input placeholder="example@example.com" @input="email=$event.target.value" type="email"/>
              </ion-item>
              <ion-item>
                <ion-label  position="floating">Contraseña:</ion-label>
                <ion-input placeholder="Example123*" @input="password=$event.target.value" type="password"/>
              </ion-item>
            </ion-card-content>
            <ion-card-content align="center">
              <ion-button type="button" @click="onSubmit">Entrar</ion-button>
              <ion-button type="button" >Google</ion-button>
              <ion-router-link>¿Ház olvidado tu contraseña?</ion-router-link>
              <ion-button type="button" @click="onRegister">Registrarse</ion-button>
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
import { REGISTER_PATH } from '@/global/paths'
export default {
  name: "Login",
  components: {
    IonPage,
  },
  data(){
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async onSubmit(){
      await Client.authLoginByEmail({
        email: this.email,
        password: this.password
      }).then((result)=>{
        alert(result.message)
        this.$router.push(result.redirect)
      })
    },
    onRegister(){
      this.$router.push(REGISTER_PATH)
    }
  }
}
</script>
