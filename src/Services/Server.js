const SERVER_URL = "https://api-kursova.azurewebsites.net";

class Server {
    health() {
        return fetch(SERVER_URL + '/health')
            .then(res => {
                if (res.status === 200) {
                    return res.status;
                } else {
                    return "error";
                }
            });
    }
    parseKeyword(keyword) {
        return fetch(SERVER_URL + '/keyword?value=' + encodeURI(keyword))
            .then(res => res.text())
            .then(body => {
                if (body === keyword) {
                    return keyword;
                } else {
                    return "error";
                }
            });
    }
    getResults(keyword) {
        return fetch(SERVER_URL + '/getResults?value=' + encodeURI(keyword))
            .then(res => res.text())
            .then(body => {
                const obj = JSON.parse(body);
                return obj.results;
            }).catch((error) => {
                return "not found";
            });;
    }
    getKeywords(url) {
        return fetch(SERVER_URL + '/getKeywords?value=' + url)
            .then(res => res.text())
            .then(body => {
                console.log(body);
                const obj = JSON.parse(body);
                console.log(obj);
                return obj.results;
            }).catch((error) => {
                return "not found";
            });;
    }
    uploadCSV(list) {
        if (list.length != 0) {
            let urlArray = 'myParam=' + encodeURI(list[0]);
            for (let i = 1; i < list.length; i++) {
                urlArray += '&myParam=' + encodeURI(list[i]);
            }
            console.log(urlArray);
            return fetch(SERVER_URL + '/upload?' + urlArray)
            .then(res => res.text())
            .then(body => {
               return body;
            });
        }
    }
}
export default new Server;