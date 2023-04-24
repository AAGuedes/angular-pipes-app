import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'John';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    if (this.name === 'John') {
      this.name = 'Jane';
      this.gender = 'female';
    } else {
      this.name = 'John';
      this.gender = 'male';
    }
  }

  //i18n Plural
  public clients: string[] = ['John Doe', 'Jane Doe', 'Jhonny Doe', 'Janie Doe', 'Richard Doe', 'Rachel Doe'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue
  public person = {
    name: 'John Doe',
    age: 18,
    address: 'New York, New York'
  }
}
