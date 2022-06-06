import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { CharacterService } from '../characters.service';
import { ListPokemon } from '../models/list-pokemon';
import { MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  items: any=[];
  
  constructor(private service: CharacterService) { }

  ngOnInit(): void {
    /* this.service.getDetails(2).subscribe((data:Character) => {
      console.log(data);
    }) */
    this.service.getAllPokemon().subscribe((data:any)=> {
      this.items = data.results
      console.log(data);
    })

  }

}
