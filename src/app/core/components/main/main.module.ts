import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
	declarations: [
		MainComponent,
	],
	imports: [
		CommonModule,
		MainRoutingModule,
		MatListModule,
		MatCardModule,
		MatButtonModule,
		MatMenuModule,
		MatIconModule
	]
})
export class MainModule { }