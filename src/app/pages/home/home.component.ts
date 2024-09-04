import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { Component } from '@angular/core'



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor( private http:HttpClientModule){}

}
