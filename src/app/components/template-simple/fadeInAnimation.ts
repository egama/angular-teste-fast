
import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
  transition('* <=> *', [
    style({ opacity: 0 }),
    animate('1s', style({ opacity: 1 })),
  ]),
]);
