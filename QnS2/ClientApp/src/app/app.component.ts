import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private spinner: NgxSpinnerService) { }

  public spinnerConfig: any = {
    bdColor: 'rgba(255,255,255,0)',
    size: 'large',
    color: '#a4f20c',
    loadigText: 'Loading...'
  };

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}
