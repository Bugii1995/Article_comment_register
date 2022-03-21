import { User2 } from "./module.js"
import { User } from "./module.js"

export function registerUser(obj){
    let users;
    if(localStorage['users']){
        users = JSON.parse(localStorage['users'])
    } else {
        users = [];
    }
    const {username , email , number , avatar , password} = obj;
    const user = new User(username , email , number , avatar , password);
    user.register(users)
    localStorage.setItem('users' , JSON.stringify(users))
nn.  

export function registerUser2(obj){
    let users2;
    if(localStorage['users2']){
        users2 = JSON.parse(localStorage['users2'])
    } else {
        users2 = [];
    }
    const {title, text, pic, date, person, id} = obj;
    const user2 = new User2(title, text, pic, date, person, id);
    user2.register2(users2)
    localStorage.setItem('users2' , JSON.stringify(users2))
}
  mknk















export function login(user){
    const {email , password} = user;
    let data;
    let users  = getData(data);
    const currentUser = users.find(usr => usr.email === email && usr.password === password);
    if(!currentUser){
        alert("not found")
    } else {
        alert('logged in')
        localStorage.setItem('currentUSer', JSON.stringify(currentUser));
        location.href = './account.html'
    }
}

function getData(users){
    if(localStorage['users']){
        users = JSON.parse(localStorage['users'])
    } else {
        users = [];
    }
    return users;
}

