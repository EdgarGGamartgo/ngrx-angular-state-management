import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer';
import { select, Store } from '@ngrx/store';
import { addCustomer } from '../../customer/store/action/customer.actions';
import { CustomerState } from '../store/reducer/customer.reducer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(private store: Store<CustomerState>) {

  }


  addCustomer(customerName: string): void {

    const customer = new Customer();

    customer.name = customerName;

    this.store.dispatch(addCustomer(customer));

  }

  ngOnInit(): void {
  }

}
