import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navegar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet, FormsModule],
  templateUrl: './navegar.component.html',
  styleUrl: './navegar.component.css'
})
export class NavegarComponent {

  pesquisa!: string

}
