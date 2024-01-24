import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SignUpComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';

  username!: string;
  email!: string;

  showUser(){
    console.log(sessionStorage.getItem("username"));
    console.log(sessionStorage.getItem("email"));

    this.username = JSON.stringify(sessionStorage.getItem("username")).replace(/"/g, "");
    this.email = JSON.stringify(sessionStorage.getItem("email")).replace(/"/g, "");

    console.log("this.username " + this.username);
    console.log("this.email " + this.email);
  }
}
