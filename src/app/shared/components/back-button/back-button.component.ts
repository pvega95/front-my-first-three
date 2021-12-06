import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
  @Input() routerLink: any[] | string | null | undefined;
  @Input() text = 'Cancelar';
  @Output() clicked = new EventEmitter();
  returnUrl: string;

  constructor(
  ) {}

  ngOnInit(): void {

  }
}
