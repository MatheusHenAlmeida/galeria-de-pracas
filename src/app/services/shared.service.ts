import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();

  // Emit a new title to the App Bar
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }
}
