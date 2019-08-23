import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Mon blog';

	posts = [
	{
		title: 'Mon premier post',
		content: 'Lorem ipsum dolor sit amet, blibli. Curabitur nisi quam, pretium efficitur feugiat id, iaculis sed metus. In et. ',
		loveIts: 0
	},
	{
		title: 'Mon deuxième post',
		content: 'Lorem ipsum dolor sit amet, blabla. Curabitur nisi quam, pretium efficitur feugiat id, iaculis sed metus. In et. ',
		loveIts: 0
	},
	{
		title: 'Mon troisième post',
		content: 'Lorem ipsum dolor sit amet, blublu. Curabitur nisi quam, pretium efficitur feugiat id, iaculis sed metus. In et. ',
		loveIts: 0
	}
	];
}
