import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private httpClient: HttpClient) { }

    getImages(albumId: Number) {
        return this.httpClient.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    }

    getAlbums() {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/albums');
    }
}