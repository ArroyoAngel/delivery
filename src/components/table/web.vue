<template>
    <div class="web-table">
        {{usuario}}
        <table>
            <thead>
                <tr>
                    <th>KEY</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>GENDER</th>
                    <th>LOCATION</th>
                    <th>PHONE</th>
                    <th>OPCIONES</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in usuario" :key="index">
                    <td>{{index}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.gender}}</td>
                    <td>{{user.location}}</td>
                    <td>{{user.phone}}</td>
                    <td><ion-router-link :href="'/app/update/'+user.uid" color="primary">UPDATE</ion-router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
//import Client from '@/model/Client'
export default {
    name: "web-table",  
    props: {
        usuario: {
            type: Array,
            default: ()=>[],
            required: true,
        }
    },
    methods: {
        update(uid){
            console.log(uid)
            //this.route.navigate(['/app/update/'+uid]);
            this.navCtrl.setRoot('/app/update/'+uid);
            //this.navCtrl.push('/app/update/'+uid);
        }
    }
}
</script>

<style scoped>
    table{
        width: 100%;
    }
    th, td{
        width: 5%;
        text-align: center;
        padding-top: 15px;
        padding-bottom: 15px;
        border: solid 1px;
        border-color: rgb(42, 22, 68);
    }
    thead{
        background: rgb(42, 22, 68);
    }
    button{
        padding: 5px;
        background: rgb(42, 22, 68);
        border-radius: 6px;
    }
</style>
