import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; // Importar FormGroup y FormControl para definit manuelmente un group y los controls
import { FormBuilder } from '@angular/forms'; // Importar FormBuilder para crear lso forms en lugar de hacerlo con FormGroup
import { Validators } from '@angular/forms'; // Importar Validators para realizar validaciones sobre los inputs

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  nameForm = this.fb.group({                       // FormGroup alternative: profileForm = new FormGroup({
    firstName: ['', Validators.required],          // FormGroup alternative: firstName: new FormControl(''),
    lastName: ['', Validators.required],           // FormGroup alternative: lastName: new FormControl(''),
                                                   // Validacion de input mandatorio: , Validators.required
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.nameForm.value);
  }

  constructor(private fb: FormBuilder) { } // Inyectar el FormBuilder en el constructor

  ngOnInit() {
  }

}

