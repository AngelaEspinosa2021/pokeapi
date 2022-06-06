import { Component, OnInit } from '@angular/core';
import { Result } from '../models/result';
import { CharacterService } from '../characters.service';
import {ListResult } from '../models/list-result';
import { PokemonDetails } from '../models/pokemon-details';
import { Pokemon } from '../models/pokemon';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  items: Result[];
  pokemon: Pokemon;

  
  constructor(private service: CharacterService) { 
                this.items = new Array<Result>();
                this.pokemon = {
                  image: '',
                  abilities: []
                }                             
              }

  ngOnInit(): void {
    this.service.getAllPokemon().subscribe((data:ListResult)=> {
      this.items = data.results;      
      //console.log(data);
    });
  }

  detailsPokemon(id: number){
    console.log(id);
    this.service.getDetails(id).subscribe((data:any) => {
      this.pokemon.image = data.sprites.front_default;
      this.pokemon.abilities = data.abilities;
      console.log(this.pokemon);
    });   
  }

}
function log(toString: any) {
  throw new Error('Function not implemented.');
}

