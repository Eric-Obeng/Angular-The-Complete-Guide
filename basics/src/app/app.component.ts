import { Component } from '@angular/core';
import { ServerComponent } from './server/server.component';
import { HeaderComponent } from './header/header.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { DatabindingComponent } from './databinding/databinding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ServerComponent, HeaderComponent, WarningAlertComponent, DatabindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'basics';


}
