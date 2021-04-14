import { Component, OnInit } from '@angular/core';
import { Message } from '../message/message';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private messageService: MessageService) { }
  messages: Message[];
  changedText: string;
  newMessageText: string;


  ngOnInit(): void {
    this.messageService.get().subscribe((data) => {
      this.messages = data;
      console.log(data);
    });
  }

}
