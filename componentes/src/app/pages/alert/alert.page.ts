import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alerta',
      subHeader: 'Casi te sale',
      message: 'Intenta de nuevo!',
      buttons: ['esta en verde', 'ok']
    });
    await alert.present();
  };

  async presentAlertMultilpeButton() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['Cancel', 'Opne Modal', 'Delete']
    }); await alert.present();
  };

  async presentAlertMultilpeButtonAction() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [{
        text: 'OK!',
        handler: () => {
          console.log('Click en OK!')
        }
      },
      /*
            {
              text: 'Cancelar',
              handler: () => {
                console.log('Click en Cancelar')
              }
            },
      */
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'rojo'
      }]
    });
    await alert.present();
  };

  async presentimport() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Name'
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8
          }
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself'
        }
      ]
    });

    await alert.present();
  }

}
