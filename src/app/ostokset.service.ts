import { Injectable } from '@angular/core';
import { Ostos } from './Ostos'
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class OstoksetService {

  ostokset : Ostos[] = [];
  db : SQLiteObject;

  constructor(private platform : Platform, private SQLite : SQLite) { 
  
  }

  avaaKanta = () : void => {
    this.platform.ready().then(async() => {

      this.db = await this.SQLite.create({
                                    name : 'data.db',
                                    location : 'default'
                                         });
                                         
      //await this.db.executeSql("DROP TABLE ostokset;", []);

       await this.db.executeSql("CREATE TABLE IF NOT EXISTS ostokset(id INTEGER PRIMARY KEY, asia TEXT, maara INTEGER, valittu BOOLEAN DEFAULT FALSE);", []);
      //await this.db.executeSql("INSERT INTO ostokset (asia, maara) VALUES ('Eka tehtävä', '666');", []);
      
       this.haeOstokset();

    })
  }

  haeOstokset = async () : Promise<any> => {

    let tulos = await this.db.executeSql("SELECT * FROM ostokset", []);

    this.ostokset = [];

    for (let i = 0; i < tulos.rows.length; i++) {

      this.ostokset.push({
                            id: tulos.rows.item(i).id,
                            asia : tulos.rows.item(i).asia,
                            maara : tulos.rows.item(i).maara,
                            valittu: tulos.rows.item(i).valittu
                        });
    } 
  }


  uusiOstos = async (uusiOstos : Ostos) : Promise<any> => {

    await this.db.executeSql("INSERT INTO ostokset (asia, maara) VALUES (?, ?);", [uusiOstos.asia, uusiOstos.maara]);

    this.haeOstokset();

  } 


  poistaOstos = async (id : number) : Promise<any> => {

    await this.db.executeSql("DELETE FROM ostokset WHERE id = ?;", [id]);

    this.haeOstokset();

  } 

  paivitaTila = async (id : number, valittu : boolean) : Promise<any> => {

    await this.db.executeSql("UPDATE ostokset SET valittu = ? WHERE id = ?;", [valittu, id]);
    
    
  }

}
