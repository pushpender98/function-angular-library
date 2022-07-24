import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuntionsService {

  constructor() { }

  public getRandomInt(min: number, max: number): number { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
