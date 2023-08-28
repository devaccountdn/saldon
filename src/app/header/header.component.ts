import { Component } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent {
  
  public isChecked : Boolean = false ;
  
  constructor(private router:Router) { 
    this.router.events
    .subscribe(
      (event: NavigationEvent) => {
        if(event instanceof NavigationStart) {
          console.log(event);
          if(this.isChecked){
            document.getElementById('menu-bar')?.click();
          }
          document.getElementsByClassName('router-container')[0]?.scrollTo(0,0);
        }
      });
  }
  
  ngOnint(){
  }
  
  checked(event: any){
    this.isChecked = event.target?.checked ;
  }

}
