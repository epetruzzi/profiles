import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { CustomInputsComponent } from '../components/custom-inputs/custom-inputs.component';



@NgModule({
  declarations: [SideMenuComponent,
  CustomInputsComponent
  ],
  exports : [SideMenuComponent,
  CustomInputsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
