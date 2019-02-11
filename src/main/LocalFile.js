const localserver = require("./server");

class LocalFile extends RemoteFile{
    url: string;
    constructor(url: string){
        super(url)
        localserver()
        this.url = "http://localhost:4000/"+url;
        
    }
}