import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [NzLayoutModule, SearchComponent],
  standalone: true
})
export class HeaderComponent {
}
