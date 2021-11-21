<template>
  <ion-row>
  <ion-col size-sm="3"></ion-col>
  <ion-col size-sm="6">
    <form  >
    <ion-card>
      <ion-card-header align="center">
        <h1>LOGIN</h1>
      </ion-card-header>
      <ion-card-content>
        <ion-item>
          <ion-label  position="floating">Correo:</ion-label>
          <ion-input placeholder="example@example.com" @input="username=$event.target.value" type="email"/>
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
        <ion-button type="button" href="/user/register">Registrarse</ion-button>
      </ion-card-content>
    </ion-card>
    </form>
  </ion-col>
  <ion-col size-sm="3"></ion-col>
  </ion-row>
</template>
<script>
import Client from '@/model/Client'
export default {
  name: "Login",
  data(){
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async onSubmit(){
      Client.authRegisterByEmail({
        username: this.username,
        password: this.password
      })
    },
  }
}
</script>
