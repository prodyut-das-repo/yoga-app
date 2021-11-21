import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  selectList = ['First theme', 'Second theme', 'Third theme'];
  theme1 = false;
  theme2 = false;
  theme3 = false;

  ngOnInit(): void {
    /*
		Designed by: SELECTO
		Original image: https://dribbble.com/shots/5311359-Diprella-Login
*/
    // @ts-ignore: Object is possibly 'null'.
    let switchCtn = document.querySelector('#switch-cnt');
    let switchC1 = document.querySelector('#switch-c1');
    let switchC2 = document.querySelector('#switch-c2');
    let switchCircle = document.querySelectorAll('.switch__circle');
    let switchBtn = document.querySelectorAll('.switch-btn');
    let aContainer = document.querySelector('#a-container');
    let bContainer = document.querySelector('#b-container');
    let allButtons = document.querySelectorAll('.submit');

    let getButtons = (e: { preventDefault: () => any }) => e.preventDefault();

    let changeForm = (e: any) => {
      // @ts-ignore: Object is possibly 'null'.
      switchCtn.classList.add('is-gx');
      setTimeout(function () {
        // @ts-ignore: Object is possibly 'null'.
        switchCtn.classList.remove('is-gx');
      }, 1500);
      // @ts-ignore: Object is possibly 'null'.
      switchCtn.classList.toggle('is-txr');
      switchCircle[0].classList.toggle('is-txr');
      switchCircle[1].classList.toggle('is-txr');
      // @ts-ignore: Object is possibly 'null'.
      switchC1.classList.toggle('is-hidden');
      // @ts-ignore: Object is possibly 'null'.
      switchC2.classList.toggle('is-hidden');
      // @ts-ignore: Object is possibly 'null'.
      aContainer.classList.toggle('is-txl');
      // @ts-ignore: Object is possibly 'null'.
      bContainer.classList.toggle('is-txl');
      // @ts-ignore: Object is possibly 'null'.
      bContainer.classList.toggle('is-z200');
    };

    let mainF = (e: any) => {
      for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener('click', getButtons);
      for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener('click', changeForm);
    };

    window.addEventListener('load', mainF);
  }

  changeTheme(e: any) {
    switch (e.target.value) {
      case 'First theme': {
        this.theme1 = true;
        this.theme2 = false;
        this.theme3 = false;
        break;
      }
      case 'Second theme': {
        this.theme1 = false;
        this.theme2 = true;
        this.theme3 = false;
        break;
      }
      case 'Third theme': {
        this.theme1 = false;
        this.theme2 = false;
        this.theme3 = true;
        break;
      }
      default: {
        this.theme1 = true;
        this.theme2 = false;
        this.theme3 = false;
      }
    }
  }
  signIn(){
  }
  signUp(){

  }
}
