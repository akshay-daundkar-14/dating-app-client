import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'Dating Application';
  http = inject(HttpClient);
  users :any;

  ngOnInit(): void {
     this.http.get("https://localhost:7062/api/user").subscribe({
      next : response=> this.users = response,
      error : err=> console.log(err),
      complete: ()=> console.log("Completed")
     })
  }


}
