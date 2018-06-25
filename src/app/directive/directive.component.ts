import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
	liaison1: string = 'liaison 1';
	liaison2: string = 'date';
	liaison3: string = 'test';
	status:boolean = true;
	texts: Array = ['un', 'deux', 'trois'];

	public changeInput(event : Event): void{
		this.liaison2 = (<HTMLInputElement>event.target).value;
	}
	public changeStatus(event: Event): void{
		this.status = !this.status;
	}
}
@NgModule({
	declarations: [DirectiveComponent],
	imports: [FormsModule],
})