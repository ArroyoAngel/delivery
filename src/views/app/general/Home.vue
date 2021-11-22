<template>
  <ion-page>
    <ion-card-content>
      <h1>ESTO ES HOME</h1>
      <div class="contenido">

      </div>
    </ion-card-content>
  </ion-page>
</template>
<script>
import { IonPage } from '@ionic/vue'
export default {
  components: {
    IonPage,
  }
}
</script>
<style scoped>
  .contenido{
    height: 1000px;
    width: 1000px;
    background: red;
  }
</style>