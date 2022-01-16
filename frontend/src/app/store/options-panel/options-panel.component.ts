import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoreOptionsService } from 'src/shared/services/store-options.service';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.scss']
})
export class OptionsPanelComponent implements OnInit {
  filter: string = '';

  constructor(private storeService: StoreOptionsService) { }

  ngOnInit(): void {
  }

  onChanges(): void {
    this.storeService.filter.next(this.filter);
  }
}
