import { Component, inject } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { CardContainerComponent } from './components/card/card-container.component';
import { FooterComponent } from '../../shared-components/footer/footer.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { BookingsService } from './bookings.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
  selector: 'bookings-page',
  standalone: true,
  imports: [NzLayoutModule, CardContainerComponent, FooterComponent, SearchFormComponent, NzIconModule, NzFlexModule],
  templateUrl: './bookings.page.html'
})
export class BookingsPage {
  bookingsService = inject(BookingsService);
  showSearchForm = false;
}
