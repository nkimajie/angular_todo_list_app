import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  testForm: FormGroup;
  // name = new FormControl('');

  constructor(
    private formBuilder: FormBuilder
    
  ) {
    this.testForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
   }

  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
  }

}
