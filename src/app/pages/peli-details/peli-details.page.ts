import { Component, OnInit } from '@angular/core';
//impostacoines del api 
import { PeliService } from "../../services/peli.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-peli-details',
  templateUrl: './peli-details.page.html',
  styleUrls: ['./peli-details.page.scss'],
})
export class PeliDetailsPage implements OnInit {
  content: object = null;
  constructor(private peliService: PeliService, 
    private activatedRoute: ActivatedRoute,
    private peliService2: PeliService) { }

  ngOnInit() {
    //DAtos PAra the movie db
    let id1 = this.activatedRoute.snapshot.paramMap.get('id');
    let tipo = this.activatedRoute.snapshot.paramMap.get('Type');
    this.peliService2.getDetails1(id1, tipo).subscribe(result =>this.content = result);
    //datos para OMDB_API
    let id2 = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliService.getDetails(id2, tipo).subscribe(result =>this.content = result);
  }

}
