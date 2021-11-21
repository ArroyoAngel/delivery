import Account from './Account'

class Admin extends Account {
    async register(method: string, payload: any, account: any): Promise<void>{
        let credential: any = null
        switch(method){
            case "google":
                credential = await this.authRegisterByProviderGoogle()
                payload = {
                    name: credential.displayName,
                    email: credential.email,
                    phone: credential.phoneNumber,
                    age: 0,
                    rol: '',
                    shift: '',
                    seniority: 0,
                    uid: credential.uid,
                }
                break
            case "phone":
                credential = console.log("This function is in progress")
                break
            default:
                credential = await this.authRegisterByEmail(account)
                break
        }
        this.firebase.registerDocument("clients", payload, credential.uid)
    }
}