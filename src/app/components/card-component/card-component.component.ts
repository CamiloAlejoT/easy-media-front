import { Component, Input } from '@angular/core';
import { FilterPubResponse } from 'src/app/core/interfaces/http.interface';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent {

  @Input() publication?: FilterPubResponse;

}
