import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  constructor(private service: CharacterService) { }

  ngOnInit(): void {
    this.service.getDetails(2).subscribe((data:Character) => {
      console.log(data);
    })
  }

}
