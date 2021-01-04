import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//-----self-added------//
// import {MatInputModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const modules = [
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: [
    modules
  ]
})
export class MaterialModule { }
