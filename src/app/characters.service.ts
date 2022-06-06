import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResult } from './models/list-result';


@Injectable({
    providedIn:'root'
})

export class CharacterService {

    baseUrl: string;

    constructor(private http: HttpClient){
        this.baseUrl = 'https://pokeapi.co/api/v2/pokemon'
    }

    getAllPokemon()
    {
        return this.http.get<ListResult>(this.baseUrl);
    }

    getDetails(id:number){
        return this.http.get<ListResult>(`${this.baseUrl}/${id}`)
    }

}
