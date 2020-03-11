import { Component } from '@angular/core';
import { Ostos } from '../Ostos';
import { AlertController } from '@ionic/angular';
import { OstoksetService } from '../ostokset.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  constructor(public alertCtrl : AlertController, private Ostokset : OstoksetService) {
    this.Ostokset.avaaKanta();
    
  }

  async avaaAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Lisää uusi',
      inputs: [
        {name: 'asia',
         type: 'text',
        placeholder: 'Mitä ostetaan?'},
        {name: 'maara',
        type: 'number',
        placeholder: 'Kuinka paljon?'}
      ],
      buttons: [
        {text: 'Peruuta',
         role: 'cancel'},
        {text: 'Lisää',
          handler: (data : any) => {
            let uusiOstos = {
                          id: 0,
                          asia: data.asia,
                          maara: data.maara,
                          valittu: false
            }
            this.Ostokset.uusiOstos(uusiOstos);
          }} ]
    });
    return await alert.present();
  }

  poista = (index : number) : void=> {

    this.Ostokset.poistaOstos(index);

  } 

muuta = (id : number, valittu : boolean) => {
  let uusivalinta = valittu;
  this.Ostokset.paivitaTila(id, uusivalinta);
}

}

