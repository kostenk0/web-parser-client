const SERVER_URL = "https://api-kursova.azurewebsites.net";

class Server{
    health(){
        return fetch(SERVER_URL+'/health')
        .then(res => {
            if(res.status === 200){
                return res.status;
            }else{
                return "error";
            }
        });
    }
    parseKeyword(keyword){
        return fetch(SERVER_URL+'/keyword?value='+encodeURI(keyword))
        .then(res => res.text())
        .then(body => {
            if(body === keyword){
                return keyword;
            }else{
                return "error";
            }
        });
    }
    getResults(keyword){
        return fetch(SERVER_URL+'/getResults?value='+encodeURI(keyword))
        .then(res => res.text())
        .then(body => {
            const obj = JSON.parse(body);
            return obj.results;
        });
    }
}
export default new Server;