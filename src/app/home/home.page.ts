import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController,
    private rota: Router) {}
  

  detalhesfilme(paramID)
  {
    console.log("passou"+paramID);
    this.rota.navigate(['/detalhesfilme',{id:paramID}])
  }
  


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

  


    await alert.present();
  }

}