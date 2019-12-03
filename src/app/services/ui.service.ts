import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  private mainPageBg = 'assets/bg-8.jpg';
  private workingPageBg = 'assets/bg.jpg';

  public get mainPageBgImg(): string {
    return this.mainPageBg;
  }

  public get workingPageBgImg(): string {
    return this.workingPageBg;
  }
}
