<template>
  <ion-page style="justify-content: center">
    <ion-row align-items-center>
        <ion-col size-xl="4" size-sm="6" offset-xl="4" offset-sm="3" size-xs="12">
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
              <ion-button type="button" @click="onSubmit"><span>Entrar</span></ion-button><br>
              <ion-button type="button" >
                <img class="icon-google" src="@/assets/icon-google.png">
                <span>Google</span>
              </ion-button><br>
              <ion-router-link>¿Ház olvidado tu contraseña?</ion-router-link><br>
              <ion-router-link @click="onRegister">Registrar una nueva cuenta.</ion-router-link><br>
            </ion-card-content>
          </ion-card>
          </form>
        </ion-col>
    </ion-row>
  </ion-page>
</template>
<script>
import { IonPage, IonButton } from '@ionic/vue';
import Client from '@/model/Client'
import { REGISTER_PATH } from '@/global/paths'
export default {
  name: "Login",
  components: {
    IonPage,
    IonButton
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
<style scoped>
  .icon-google{
    width: 30px !important;
    height: 30px !important;
  }
  ion-router-link:hover{
    cursor: pointer;
    color: var(--ion-color-primary-shade)
  }
  span{
    font-weight: bold;
    color: var(--ion-color-light-tint);
  }
</style>