import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
import { FotoService } from '../foto/foto.service';

import { } from "module";
import { FotoComponent } from '../foto/foto.component';

@Component({
	selector: 'app-listagem',
	templateUrl: './listagem.component.html',
	styles: []
})
export class ListagemComponent implements OnInit {

	listaFotos: FotoComponent[] = [];

	constructor(private fotoService: FotoService) {
		this.listar();
	}

	ngOnInit() {
	}

	listar() {
		this.fotoService.listar()
			.subscribe(response => {
				this.listaFotos = response;
			});
	}

	deletar(foto: FotoComponent) {
		this.fotoService.deletar(foto).subscribe(resposta => {
			this.listar();
		})
	}

}
