import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Character } from "./character";

@Injectable({
    providedIn:'root'
})

export class CharacterService {

    baseUrl: string;

    constructor(private http: HttpClient){
        this.baseUrl = 'https://pokeapi.co/api/v2/pokemon'
    }


    getDetails(id:number){
        return this.http.get<Character>(`${this.baseUrl}/${id}`)
    }

}
