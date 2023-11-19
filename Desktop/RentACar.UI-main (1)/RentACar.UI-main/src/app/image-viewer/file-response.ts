export class FileResponse {
    id : number
    name : string
    data : ArrayBuffer

    constructor(incomingData : any){ 
        this.id = incomingData;
        this.name = incomingData;
        this.data = incomingData;
    }

}