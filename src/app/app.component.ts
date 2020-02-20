import { Component, Input } from '@angular/core';
import { NavigationService } from './navigation.service';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-design-v2';

}
