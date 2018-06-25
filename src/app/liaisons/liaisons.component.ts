import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liaisons',
  templateUrl: './liaisons.component.html',
  styleUrls: ['./liaisons.component.css']
})
export class LiaisonsComponent implements OnInit {
	clickTxt: string = '';

	clickAction(event: Event):void {
		console.log(event);
		this.clickTxt = 'clic !';
	}
}
