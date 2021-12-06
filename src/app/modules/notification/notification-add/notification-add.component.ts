import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-notification-add-ui',
  templateUrl: './notification-add.component.html',
  styleUrls: ['./notification-add.component.scss'],
})
export class NotificationAddComponent {
  validateForm!: FormGroup;
  controlArray: Array<{ index: number; show: boolean }> = [];
  isCollapse = true;
  title: string = 'Agregar Notificacion';
  primaryAction = 'Agregar';
  uploading = false;
  fileList: NzUploadFile[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private msg: NzMessageService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params && Object.keys(params).length) {
        this.title = 'Editar Notificacion';
        this.primaryAction = 'Editar';
      }
    });

    this.validateForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      programation: new FormControl(null, [Validators.required]),
      concurrence: new FormControl(null, [Validators.required]),
      status: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(){
    console.log(this.fileList);
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  handleUpload(): void {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    this.uploading = true;
    // You can use any AJAX library you like
    const req = new HttpRequest('POST', 'https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
      // reportProgress: true
    });
    this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        () => {
          this.uploading = false;
          this.fileList = [];
          this.msg.success('upload successfully.');
        },
        () => {
          this.uploading = false;
          this.msg.error('upload failed.');
        }
      );
  }
}
