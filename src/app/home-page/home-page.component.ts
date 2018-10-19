import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  constructor() { 
  }
  currentWord = "WELCOME"
  welcomeWord = [
    'WELCOME',
    'BIENVENIDO',
    'BENVENUTO',
    'BIENVENUE',
    'BEM VINDA',
    'WITAMY',
    'HERZLICH WILLKOMMEN',
    'ようこそ',
    '欢迎',
    'أهلا بك',
  ];
  
  welcomeWordWillUpdate = () => {
    this.pickWelcomeWord(this.handleTimeOut);
  }
  
  pickWelcomeWord = (cb) => {
    let randomNumber = Math.floor(Math.random() * this.welcomeWord.length);
    this.currentWord = this.welcomeWord[randomNumber]
    return cb();
  }
  handleTimeOut = () =>{
    try{
      setTimeout(this.welcomeWordWillUpdate, 3000);
    }catch(e) {
      console.log('TimeOut error:', e);
    }
  }

  ngOnInit() {
    setTimeout(this.welcomeWordWillUpdate, 3000);
  }

}
