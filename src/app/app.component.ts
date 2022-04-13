import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy{
  mediaSub: Subscription = new Subscription;
  deviceXs: boolean = false;
  constructor(public mediaObserver:MediaObserver){}
  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
      }
    );
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
}