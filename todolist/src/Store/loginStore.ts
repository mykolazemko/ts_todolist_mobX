import { action, makeObservable, observable } from 'mobx'


class LoginState {
    constructor() {
        makeObservable(this)
    }
    @observable isLogged: boolean = false;
    @observable userLogin: string = "";
    @observable userPassword: string = "";
    @observable userLoginAndPassword: { login: string, password: string }[] = [
        { login: "admin", password: "admin" }
    ]

    @action setUserLoginValue = (e: any) => {
        e.preventDefault();
        this.userLogin = e.target.value
    }
    @action setUserPassValue = (e: any) => {
        e.preventDefault();
        this.userPassword = e.target.value
    }
    @action loginSubmit = (e: any) => {
        e.preventDefault();
        if (
            localStorage.getItem(this.userLogin) !== null
            && this.userPassword === localStorage.getItem(this.userLogin)) {
            this.isLogged = true;
        } else alert("Wrong Login or Password")
    }
    @action signInSubmit = (e: any) => {
        e.preventDefault();
        if (
            localStorage.getItem(this.userLogin) !== null) {
            alert("This Login cannot be created")
        } else {
            localStorage.setItem(this.userLogin, this.userPassword);
            this.isLogged = true;
        }
    }
    @action logouting = () => {
        this.isLogged = false;
        this.userLogin = "";
        this.userPassword = "";
    }
}

const loginStore = new LoginState();
export default loginStore;