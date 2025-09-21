import { Component, input, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageListComponent } from './page-list/page-list.component';
import { NgComponentOutlet } from '@angular/common';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PageListComponent,NgComponentOutlet,PageDetailComponent,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lifeCycles';

LoadComponent()
{

return PageListComponent;

}


constructor(private viewComp : ViewContainerRef){}

LoadComponentbyClick()
{

  this.viewComp.createComponent(PageListComponent);
  this.viewComp.createComponent(PageDetailComponent);

}


RemoveComponent()
{
this.viewComp.remove();

}
 passChangeValue:string="HI raju";

Changeeventclick()
{

  this.passChangeValue="Babu Rao"
  this.title="Rao"
}
}
