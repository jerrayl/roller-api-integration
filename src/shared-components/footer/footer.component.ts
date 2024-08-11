import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { BOOKINGS_ROUTE } from '../../app/app.routes';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less',
  imports: [NzLayoutModule, NzTabsModule, NzIconModule, RouterLink],
  standalone: true
})
export class FooterComponent {
  tabs = [
    {
      name: 'Products',
      icon: 'appstore',
      link: ''
    },
    {
      name: 'My Bookings',
      icon: 'schedule',
      link: `/${BOOKINGS_ROUTE}`
    }
  ];
}
