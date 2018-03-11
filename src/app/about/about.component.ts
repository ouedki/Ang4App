import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info={
    nom:"yassine",
    email:"yassine@gmail.com",
    tel:"11223344"
  };

  comments=[
    {date:new Date(), message:'A'},
    {date:new Date(), message:'B'},
    {date:new Date(), message:'C'}
  ];

  comment={date:null, message:''};

  constructor() { }

  ngOnInit() {
  }
  onSendComment(c) {
    c.date=new Date();
    this.comments.push(c);
    this.comment={date:null, message:''};
  }

}
