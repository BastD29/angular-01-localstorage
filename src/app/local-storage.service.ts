import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem(key: string, value: string){
    localStorage.setItem(key, value);
  }

  public getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : null;
  }

  public removeItem(key: string){
    localStorage.removeItem(key);
  }

  public clear(){
    localStorage.clear();
  }
}
