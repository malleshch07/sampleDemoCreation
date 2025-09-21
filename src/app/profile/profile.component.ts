import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ComponentRef, DoCheck, Input, OnChanges, OnInit, ViewContainerRef } from '@angular/core';
import { PageDetailComponent } from '../page-detail/page-detail.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [PageDetailComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges,OnInit,DoCheck,AfterContentInit, AfterContentChecked,AfterViewInit{
// constructor()
// {


//   console.log(this.childGetValue  +"hi trigger");
// }

@Input() childGetValue:string="";


constructor( private loadcomponenta: ViewContainerRef)
{

  console.log("hi im consttutor loaded first" + this.childGetValue);
  console.log(this.childGetValue);

}
ngOnChanges()
{
console.log(this.childGetValue  +"ngchange");

}

ngOnInit() {
  console.log("this is oninit calls once" +this.childGetValue)
}

ngDoCheck(): void {
  console.log("this is ng do check fires on every change");
}

intchangecounter:number=0;

incrementCounter()
{

  this.intchangecounter++;
}

ngAfterContentInit(): void {
  console.log("im ng after content checked onetime after rendered")
}
ngAfterContentChecked(): void {
  console.log("im render eery cahgne happened to ng content from parent")
}
ngAfterViewInit(): void {
  console.log("view ng after view init checking by load component");
}

LoadComponentview()
{

  this.loadcomponenta.createComponent(PageDetailComponent);
}

}
