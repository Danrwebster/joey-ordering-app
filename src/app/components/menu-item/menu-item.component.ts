import { Component, OnInit, Input } from '@angular/core';
import { IMenuItemDetails, IModifier } from '@models/menu.model';

@Component({
	selector: 'app-menu-item',
	templateUrl: './menu-item.component.html',
	styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

	@Input() item: IMenuItemDetails;

	constructor() { }

	ngOnInit() {
	}

	getPrice(option: IModifier): string {
		return option.priceLevel ? option.priceLevel.formattedPrice : '';
	}

}
