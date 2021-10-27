import { Injectable } from '@angular/core';
import { AngularFirestore  } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Client } from '../models/Client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
 clientCollection:AngularFirestoreCollection<Client>;
 clientDoc:AngularFirestoreDocument<Client>;
 clients : Observable<Client[]>;
 client : Observable<Client>


  constructor(private afs:AngularFirestore) { 
    this.clientCollection =this.afs.collection('clients', 
    ref => ref.orderBy('lastName', 'asc'));
  }


  getClients():Observable<Client[]>{
    this.clients = this.clientCollection.snapshotChanges().pipe(
      map((actions:any) => {
        return actions.map((a: any) => {
          const data = a.payload.doc.data();
          return data;
        });
      })
    );
    return this.clients;
  }
}
