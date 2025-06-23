class User {
    #email
    #password//truely private
    constructor(email, password){
        this.#email = email;
        this.#password = password
    }

    get email(){
        return this.#email.toUpperCase()
    }
    set email(value){
        this.#email = value
    }

    get password(){
        return `${this.#password}harsh`
    }

    set password(value){
        this.#password = value
    }
}

const harsh = new User("h@harsh.ai", "abc")
console.log(harsh.email);