import { Firebase } from '@/helpers/firebase'

export default class Account {
    firebase: Firebase
    constructor(){
        this.firebase = new Firebase()
    }
    authRegisterByEmail(account: any): any{
        return this.firebase.authRegisterByEmail(account.email, account.password)
    }
    authRegisterByProviderGoogle(): any {
        return this.firebase.authRegisterByProviderGoogle()
    }

    /*login(): void{

    }
    logout(): void{

    }
    delete(): void{
        
    }*/
}
