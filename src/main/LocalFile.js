/**
 * LocalFile is a representation of a file on a remote server which can be
 * fetched in chunks, e.g. using a Range request.
 * @flow
 */
const localserver = require("./server");

class LocalFile extends RemoteFile{
    url: string;
    constructor(url: string){
        super(url)
        localserver()
        this.url = "http://localhost:4000/"+url;
        
    }
}

module.exports = LocalFile;