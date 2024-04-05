import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  allowNewServer = false;
  serverCreationStatus = 'no server created';
  serverName = 'TestServer';
  serverCreated = false;

  onServerCreation() {
    this.serverCreationStatus =
      'server created successfully! Name is ' + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  serverId = 10;
  serverStatus = 'offline';
}
