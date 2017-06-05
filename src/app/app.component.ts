import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', ],
      address: this.fb.group({ // create nested formgroup to pass to child
        street: ['', Validators.required],
        zip: ['', Validators.required]
      })
    })
  }

  title = 'Parent';
}
