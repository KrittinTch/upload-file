import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  filenames: Array<any> = []

  constructor() { }

  ngOnInit() {
  }

  allowDrop(ev) {
    ev.preventDefault();
    console.log("allow drop");
  }

  drop(ev) {
    ev.preventDefault();
    const files = ev.dataTransfer.files;
    // var fileName = files[0].name;
    // console.log(files);
    for (let i = 0; i < files.length; i++) {
      const el = files[i];
      // console.log(el);
      this.filenames.push(el);
    }
    console.log(this.filenames);
  }

}
