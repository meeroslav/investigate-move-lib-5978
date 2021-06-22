import { Component } from '@angular/core';
import { MysrvService } from '@migration-tests-old/shared/mylib';

@Component({
  selector: 'migration-tests-old-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';

  constructor(private readonly srv: MysrvService) {}
}
