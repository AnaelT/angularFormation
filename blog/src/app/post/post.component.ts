import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	@Input() title: string;
	@Input() content: string;
	@Input() loveIts: number;
	@Input() created_at: Date;

	constructor() {
		this.created_at = new Date();
	}

	ngOnInit() {
	}

	loveIt(){
		this.loveIts += 1;
	}

	dontLoveIt(){
		this.loveIts -= 1;
	}
}
