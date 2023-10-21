import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  filteredtext: string = "";
  @Output() filter = new EventEmitter<string>();

  filtering(f: string) {
    this.filter.emit(this.filteredtext);
  }

}
