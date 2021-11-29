import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learnAngular';
  //count = 0;
  // displayVal: string = '';
  // firstFunction() {
  //   alert('Hello');
  // }

  // getEvent(val: string) {
  //   console.warn(val);
  //   this.displayVal = val;
  // }

  // counter*****
  // counter(type: string) {
  //   type === 'add' ? this.count++ : this.count--;
  // }

  // Property binding practice....

  // disable: boolean = true;

  // bind() {}

  //Basic if Else conditions************

  //show: boolean = true; // if this condition will false nothing will print
  // show: boolean = false; // if this condition will true no need of false condition..

  //basic else if condition*******

  // color = 'dd';

  //switch conitions***
  // color = 'dd';

  // for loop***

  // userDetails: any = [
  //   {
  //     name: 'amir',
  //     email: 'amirkhan@gmail.com',
  //     phone: '9987677709',
  //     address: 'bandra Mumbai',
  //   },
  //   {
  //     name: 'salman',
  //     email: 'selmonboi@gmail.com',
  //     phone: '9990876516',
  //     address: 'band-stand Mumbai',
  //   },
  //   {
  //     name: 'sunil',
  //     email: 'sunilShetty@gmail.com',
  //     phone: '9987618485',
  //     address: 'gore gaon Mumbai',
  //   },
  //   {
  //     name: 'amit',
  //     email: 'amitabhBachhan@gmail.com',
  //     phone: '1001677709',
  //     address: 'villa parla Mumbai',
  //   },
  // ];

  //use of nested/multidimenssional for loop********

  // userDetails: any = [
  //   {
  //     name: 'amir',
  //     email: 'amirkhan@gmail.com',
  //     phone: '9987677709',
  //     socialAccounts: ['Facebook', 'Instagram', 'Gmail'],
  //   },
  //   {
  //     name: 'salman',
  //     email: 'selmonboi@gmail.com',
  //     phone: '9990876516',
  //     socialAccounts: ['Facebook', 'Instagram', 'Gmail'],
  //   },
  //   {
  //     name: 'sunil',
  //     email: 'sunilShetty@gmail.com',
  //     phone: '9987618485',
  //     socialAccounts: ['Facebook', 'Instagram', 'Gmail'],
  //   },
  //   {
  //     name: 'amit',
  //     email: 'amitabhBachhan@gmail.com',
  //     phone: '1001677709',
  //     socialAccounts: ['Facebook', 'Instagram', 'Gmail'],
  //   },
  // ];

  // style binding***
  // color = 'red';

  // BASIC FORM*****

  // userData: any = [];

  // getData(data: any) {
  //   console.log(data);
  //   this.userData = data;
  // }

  // TOGGLE BUTTON********

  // display = true;
  // toggle() {
  //   this.display = !this.display;
  // }

  //TODO APP WITH ANGULAR*****
  // list: any[] = [];
  // addTask(item: string) {
  //   this.list.push({ id: this.list.length, name: item });
  //   console.log(this.list);
  // }

  // removeTask(id: number) {
  //   this.list = this.list.filter((item) => item.id !== id);
  // }
}
