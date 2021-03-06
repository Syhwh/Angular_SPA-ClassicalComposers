import { Component, OnInit } from '@angular/core';
import { MusiciansService, Musician} from '../../services/mucisians.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-musicians',
  templateUrl: './musicians.component.html',
  styleUrls: ['./musicians.component.css']
})
export class MusiciansComponent implements OnInit {

  musicians: Musician[] = [];

  constructor( private _musiciansService: MusiciansService,
               private _router: Router) { }

  ngOnInit() {
    this.musicians = this._musiciansService.getMusicias();
  }

moreMusician(idx: number) {

  this._router.navigate(['/musician', idx]);
}

}


