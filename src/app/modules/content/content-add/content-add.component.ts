import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-add-ui',
  templateUrl: './content-add.component.html',
  styleUrls: ['./content-add.component.scss'],
})
export class ContentAddComponent {
  validateForm!: FormGroup;
  controlArray: Array<{ index: number; show: boolean }> = [];
  isCollapse = true;
  title: string = 'Agregar Contenido';
  primaryAction = 'Agregar'

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params && Object.keys(params).length) {
        this.title = 'Editar Contenido';
        this.primaryAction = 'Editar'
      }
    });

    this.validateForm = this.fb.group({
      title: new FormControl('', [
        Validators.required
      ]),
      category: new FormControl('', [
        Validators.required
      ]),
      content: new FormControl('', [
        Validators.required
      ]),
      typeContent: new FormControl('', [
        Validators.required
      ]),
      author: new FormControl('', [
        Validators.required
      ]),
      status: new FormControl('', [
        Validators.required
      ])
    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }
}
