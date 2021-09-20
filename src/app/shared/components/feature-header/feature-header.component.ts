import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lgto-feature-header',
  templateUrl: './feature-header.component.html',
  styleUrls: ['./feature-header.component.scss']
})
export class FeatureHeaderComponent implements OnInit {

  @Input('title') public title:string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
