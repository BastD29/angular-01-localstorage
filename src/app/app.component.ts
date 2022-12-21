import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-ts-1-localstorage';

  constructor(private localStorageService: LocalStorageService){}

  public firstname: string = '';
  public lastname: string = '';
  public age: number | null = null;
  public queryKey!: string;
  public removeKey!: string;
  public queryResult!: {
    firstname: string;
  };

  public person = {
    firstName: this.firstname,
    lastName: this.lastname,
    age: this.age
  }

  public addPerson(){
    this.person.firstName = this.firstname
    this.person.age = this.age;
    this.person.lastName = this.lastname;
    this.localStorageService.setItem(this.firstname,  JSON.stringify(this.person))
  }

  public getPerson(nameToRemove: string){
    const personFromLocalStorage = this.localStorageService.getItem<{ firstname: string; }>(nameToRemove);

    if (personFromLocalStorage) this.queryResult = personFromLocalStorage;
  }

  public deletePerson(nameToDelete:string){
    this.localStorageService.removeItem(nameToDelete);
  }

  public reset(){
    this.localStorageService.clear();
  }
}
