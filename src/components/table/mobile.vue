<template>
  <div class="mobile-table">
      {{usuario.name}}
  </div>
</template>

<script>
//import { IonCol, IonGrid, IonRow } from '@ionic/vue';

export default {
  name: 'mobile-table',
  //components: { IonCol, IonGrid,IonRow },
  props:{
    usuario: {
      type: Object,
      default: ()=>null,
    }
  }
}
</script>