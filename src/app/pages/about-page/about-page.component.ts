import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-about-page',
	templateUrl: './about-page.component.html',
	styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

	private _pageTitle: string;

	constructor(
		private _router: Router,
		private _route: ActivatedRoute
	) { }

	ngOnInit() {
		this._pageTitle = this._route.snapshot.data['title'];
	}

	public get pageTitle(): string {
		return this._pageTitle;
	}

}
