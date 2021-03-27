
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ocultar = '';
  
  slides: { img: string, titulo: string, desc: string , url1: string }[] = [
    {
      img: '/assets/slides/sushi101.jpg',
      titulo: 'Sugoy Merced',
      desc: 'Ver menú y hacer pedido ...',
      // tslint:disable-next-line:max-line-length
      url1: 'https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=ee2ce017-183e-4b4b-ae07-bf90daadca6c&restaurant_uid=2c3ce823-5bda-4dcb-9bad-e337160b1fc3'
    
    },
    {
      img: '/assets/slides/sushi2.jpg',
      titulo: 'Sugoy Aconcagua',
      desc: 'Ver menú y hacer pedido ...',
      url1: 'https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=ee2ce017-183e-4b4b-ae07-bf90daadca6c&restaurant_uid=0274eac7-f89d-4bf2-98ee-6d2bf46ed767'
    }
  ];
  
  constructor(private navCtrl: NavController, private iab: InAppBrowser) { } //importo para navergar entre pantallas

  onClick() {
    this.ocultar = ' animated fadeOut fast'; //agrego en animate.css fadeOut
    this.navCtrl.navigateBack('/');
  }

  abrir(url:string,target:string) {
    
    // tslint:disable-next-line:align
    const link = url;
    this.iab.create(link, target);
    
  }


  

}
