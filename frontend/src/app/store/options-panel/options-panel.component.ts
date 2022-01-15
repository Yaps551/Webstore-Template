import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.scss']
})
export class OptionsPanelComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<string>();
  filteredStatus: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  onChanges(): void {
    // this.filterChanged.emit(this.filteredStatus);
  }
}
