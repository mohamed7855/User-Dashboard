import { Component, Input } from '@angular/core';
import { HoverCardDirective } from '../../../directives/hover-card.directive';

@Component({
  selector: 'app-one-user',
  standalone: true,
  imports: [HoverCardDirective],
  templateUrl: './one-user.component.html',
  styleUrl: './one-user.component.css',
})
export class OneUserComponent {
  @Input() user!: any;
}
