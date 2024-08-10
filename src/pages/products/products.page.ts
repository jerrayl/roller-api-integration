import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { CardContainerComponent } from './components/card/cardcontainer.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'products-page',
  standalone: true,
  imports: [NzLayoutModule, CardContainerComponent, HeaderComponent, FooterComponent],
  templateUrl: './products.page.html'
})
export class ProductsPage {
  title = 'roller-api-integration';
}
