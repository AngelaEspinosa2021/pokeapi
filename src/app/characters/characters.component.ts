import { Component, OnInit } from '@angular/core';
import { Result } from '../models/result';
import { CharacterService } from '../characters.service';
import {ListResult } from '../models/list-result';
import { ActivatedRoute , Params} from '@angular/router';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  items: Result[];
  
  constructor(private service: CharacterService) { 
                this.items = new Array<Result>();
              }

  ngOnInit(): void {
    /* this.service.getDetails(2).subscribe((data:Character) => {
      console.log(data);
    }) */
    /*this.route.params.subscribe((params: Params)=>{
      console.log(params);
      const id=params.id;
    })*/
    this.service.getAllPokemon().subscribe((data:ListResult)=> {
      this.items = data.results;
      console.log(data);
    })

  }

}
