<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size-md="6" size-sm="12">
            <ion-card>
              <ion-card-header>
              </ion-card-header>
              <ion-card-content>
                <mobile-table :products="products"></mobile-table>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size-md="6" size-sm="12">
            <ion-card>
              <ion-card-header>
              </ion-card-header>
              <ion-card-content>
                <mobile-table :notes="notes"></mobile-table>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script>
import MobileTable from '@/components/table/mobile.vue'
import Products from '@/model/Product'
import Notes from '@/model/Notes'
import {
  IonPage, IonContent, IonGrid, IonCol, IonRow,
} from '@ionic/vue'
export default {
  components: {
    MobileTable,
    IonPage, IonContent,
    IonGrid, IonRow, IonCol,
  },
  data(){
    return {
      products: [],
      notes: []
    }
  },
  async mounted(){
    this.products = await Products.getInitialValues()
    this.notes = await Notes.getInitialValues()
  },
}
</script>
<style scoped>
  .contenido{
    height: 1000px;
    width: 1000px;
    background: red;
  }
</style>