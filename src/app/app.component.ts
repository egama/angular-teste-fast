import { Component } from '@angular/core';
import { fadeInAnimation} from './components/template-simple/fadeInAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeInAnimation],
})
export class AppComponent {
  title = 'Angular Teste';
}
