import { APP_PATH, LOGIN_PATH } from "@/global/paths";

class FirebaseResponse{
  status: number;
  message: string;
  payload: any;
  redirect: string;

  constructor(){
    this.status = -1;
    this.message = "";
    this.payload = null;
    this.redirect = "";
  }
  register(error: boolean, payload: any){
    this.payload = payload
    if(!error){
      this.status = 200
      this.redirect = APP_PATH
      this.message = "Se ha registrado exitosamente."
    }else{
      this.status = 400
      this.redirect = APP_PATH
      switch(payload.code){
        case "auth/email-already-in-use":
          this.message = "Este correo ya está en uso."
          break;
        default://auth/invalid-email
          this.message = "Su correo no se ajusta al formato."
          break;
      }
    }
  }
  login(error: boolean, payload: any){
    this.payload = payload;
    if(!error){
      localStorage.setItem("user", JSON.stringify({
        accessToken: payload._tokenResponse.idToken,
        refreshToken: payload._tokenResponse.refreshToken,
        email: payload.user.email,
        uid: payload.user.uid,
      }))
      this.status = 200
      this.redirect = APP_PATH
      this.message = "Ingreso exitoso!"
    }else{
      this.status = 400;
      this.redirect = LOGIN_PATH
      switch(payload.code){
        case "auth/wrong-password":
            this.message = "Contraseña Incorrecta."
            break;
        case "auth/user-disabled":
            this.message = "Tu cuenta ha sido inhabilitada."
            break;
        default:
            this.message = "No se ha encontrado tu correo."
            break
      }
    }
  }
}
export default new FirebaseResponse()