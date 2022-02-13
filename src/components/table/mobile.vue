<template>
  <div class="mobile-table">
    <ion-list>
      <ion-item-sliding>
        <ion-item v-for="(product, index) in products" :key="index">
          <ion-avatar>
            <img src="../../assets/food/default.color.png" />
          </ion-avatar>
          <ion-label>
            <h2>{{product.name}}</h2>
            <h3>{{product.type}}</h3>
            <p>Precio: {{product.price}}</p>
          </ion-label>
          <ion-chip @click="()=>{}">
            <ion-icon name="create-outline"></ion-icon>
            <ion-label>Editar</ion-label>
          </ion-chip>
          <ion-chip @click="()=>{}">
           <ion-icon name="add-outline"></ion-icon>
            <ion-label>Comprar</ion-label>
          </ion-chip>
        </ion-item>
      </ion-item-sliding>
    </ion-list>
  </div>
</template>

<script>
import { 
  IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonChip, IonIcon,
} from '@ionic/vue';
import Products from '@/model/Product'
export default {
  name: 'mobile-table',
  components: { 
    IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonChip, IonIcon,
  },
  props:{
    products: {
      type: Array,
      default: ()=>null,
    }
  },
  methods: {
    test(){
      console.log(this.products)
    }
  }
}
</script>