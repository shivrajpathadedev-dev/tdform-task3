import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdform-task3';
  @ViewChild('jobform')jobform!:NgForm
  onsubmit() {
   if(this.jobform.valid){
    this.jobform.form.markAllAsTouched()
   }
   this.jobform.reset()
  }

  onlyNumbers(event: KeyboardEvent) {
    const key = event.key;

    if (!/^[0-9]$/.test(key)) {
      event.preventDefault();
    }
  }

  onMobileInput(event: any) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  }
}
