const SERVER_URL = "https://api-kursova.azurewebsites.net";

class Server{
    health(){
        return  fetch(SERVER_URL+'/health').then(res => res.text())
        .then(body => console.log(body));
    }
}
export default new Server;