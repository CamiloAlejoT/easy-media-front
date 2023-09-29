import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FilterPubResponse } from 'src/app/core/interfaces/http.interface';

@Component({
  selector: 'app-fixed-results',
  templateUrl: './fixed-results.component.html',
  styleUrls: ['./fixed-results.component.scss']
})
export class FixedResultsComponent implements OnChanges {

  @Input() myPublications: FilterPubResponse[] = []
  actuaPublications: FilterPubResponse[] = []
  pages: FilterPubResponse[][] = []
  actualPage: number = 0


  ngOnChanges(changes: any): void {
    if (changes) {
      this.actualPage = 0 
      this.pages = this.createPages(changes.myPublications.currentValue, 2);
      this.actuaPublications = this.pages[this.actualPage]
    }


  }


  createPages(arr: any[], columns: number) {
    const pages = [];
    for (let i = 0; i < arr.length; i += columns) {
      pages.push(arr.slice(i, i + columns));
    }
    return pages;
  }


  goToPage(page: number) {
    this.actuaPublications = this.pages[page]
    this.actualPage = page
  }
}
