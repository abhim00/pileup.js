/**
 * LocalFile is a representation of a file on a local server which can be
 * fetched in chunks, e.g. using a Range request.
 * @flow
 */
import RemoteFile from './RemoteFile';

const localserver = require("./server");

class LocalFile extends RemoteFile{
    url: string;
    constructor(url: string){
        super(url)
        new localserver()
        this.url = "http://localhost:3000/"+url;
        
    }
}

module.exports = LocalFile;