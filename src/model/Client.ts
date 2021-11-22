import Account from './Account'
export class Client extends Account{
    constructor(){
        super()
    }
    async register(method: string, payload: any, account: any): Promise<void>{
        let credential: any = null
        switch(method){
            case "google":
                credential = await this.authRegisterByProviderGoogle()
                payload = {
                    name: credential.displayName,
                    email: credential.email,
                    phone: credential.phoneNumber,
                    age: '',
                    gender: '',
                    location: '',
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
        return credential
    }
    async getAll(): Promise<Array<any>>{
        const result = await this.firebase.getCollection("clients")
        return result
    }
    async update(payload: any, uid: string): Promise<any>{
        const result = await this.firebase.updateDocument("clients", payload, uid)
        return result
    }
    /*update(uid: string): void{

    }
    getByUid(uid: string): Object{
        return {}
    }
    getByEmail(email: string): Object{
        return {}
    }
    filterByGender(): Array<Object>{
        return []
    }*/
}

export default new Client()