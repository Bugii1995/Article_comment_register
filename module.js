export class User {
    constructor(username , email , number , avatar , password){
        this.username = username;
        this.email = email;
        this.number = number;
        this.avatar = avatar;
        this.password = password;
        this.id = Math.random().toString().split('.')[1]
    }

    register(users){
        users.push(this);
    }
}


export class User2 {
    constructor(title, text, pic, date, person, id){
        this.title = title,
        this.text = text,
        this.pic = pic,
        this.date = date,
        this.person = person,
        this.id = id
    }

    register2(users2){
        users2.push(this);
    }
}



