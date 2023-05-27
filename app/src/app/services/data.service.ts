import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private myVariableSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public myVariable$: Observable<string> = this.myVariableSubject.asObservable();

  constructor() {}
  getVariable(): Observable<string> {
    return this.myVariableSubject.asObservable();
  }

  setVariable(value: string): void {
    this.myVariableSubject.next(value);
  }
}
