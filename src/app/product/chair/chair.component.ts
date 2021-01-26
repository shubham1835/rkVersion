import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css']
})
export class ChairComponent implements OnInit {

  chairGridData = [
    {img: 'https://bootdey.com/img/Content/avatar/avatar1.png', name: 'chair1', price: '$16'},
    {img: 'https://bootdey.com/img/Content/avatar/avatar2.png', name: 'chair2', price: '$12'},
    {img: 'https://bootdey.com/img/Content/avatar/avatar3.png', name: 'chair3', price: '$17'},
    {img: 'https://bootdey.com/img/Content/avatar/avatar4.png', name: 'chair4', price: '$11'},
    {img: 'https://bootdey.com/img/Content/avatar/avatar5.png', name: 'chair5', price: '$13'},
    {img: 'https://bootdey.com/img/Content/avatar/avatar5.png', name: 'chair6', price: '$15'},
    {img: 'https://bootdey.com/img/Content/avatar/avatar6.png', name: 'chair7', price: '$18'},
    {img: 'https://bootdey.com/img/Content/avatar/avatar7.png', name: 'chair8', price: '$13'},
    {img: 'https://bootdey.com/img/Content/avatar/avatar1.png', name: 'chair9', price: '$12'},
    {img: 'https://bootdey.com/img/Content/avatar/avatar2.png', name: 'chair10', price: '$15'},
    {img: 'https://bootdey.com/img/Content/avatar/avatar3.png', name: 'chair11', price: '$16'},
    {img: 'https://bootdey.com/img/Content/avatar/avatar5.png', name: 'chair12', price: '$11'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
