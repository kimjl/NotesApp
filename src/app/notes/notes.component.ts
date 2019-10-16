import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class QuickNotes {
  title = String;
  content = String;
  todo = String;
}

export class NotesComponent implements OnInit {

  titleModel: String;
  contentModel: String;
  todoModel: String;
  quicknotes: QuickNotes[];

  constructor() {

    this.titleModel = '';
    this.contentModel = '';
    this.todoModel = '';

    //Default QuickNotes
    const defaultQuickNotes: QuickNotes = {
      title: 'My Note',
      content: 'Default Note',
      todo: 'Default Time for Task'
    };

    this.quicknotes = [ defaultQuickNotes ];
   }

  ngOnInit() {
  }

  //Create our notes
  create QuickNotes() {
    const newQuickNotes: QuickNotes = {
      title: this.titleModel,
      content: this.contentModel,
      todo: this.todoModel
    };

    //Push the notes
    this.quicknotes.push(newQuickNotes);

    //Set Model Value back to ''
    this.titleModel = this.contentModel = this.todoModel = '';
  };

}
