import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav/drawer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Legato';

  private readonly _MIN_WIDTH: number = 1024;

  constructor() { }

  public sideNavMode(): MatDrawerMode {
    if (window.innerWidth < this._MIN_WIDTH) return 'over';

    return 'side';
  }

  public sideNavOpened(): boolean {
    if (window.innerWidth >= this._MIN_WIDTH) return true;

    return false;
  }
}
