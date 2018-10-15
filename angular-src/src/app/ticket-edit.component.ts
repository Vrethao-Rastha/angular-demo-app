import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, Subscription, fromEvent, merge, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Ticket } from './ticket';
import { TicketService } from './ticket.service';

import { NumberValidators } from './shared/number.validator';
import { GenericValidator } from './shared/generic-validator';

@Component({
  templateUrl: './ticket-edit.component.html'
})
export class TicketEditComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  pageTitle = 'Ticket Edit';
  errorMessage: string;
  ticketForm: FormGroup;
  status: any[];
  department: any[];

  ticket: Ticket;
  private sub: Subscription;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;


  get tags(): FormArray {
    return <FormArray>this.ticketForm.get('tags');
  }

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketService) {

    // Defines all of the validation messages for the form.
    // These could instead be retrieved from a file or database.
    this.validationMessages = {
      ticketName: {
        required: 'Ticket name is required.',
        minlength: 'Ticket name must be at least three characters.',
        maxlength: 'Ticket name cannot exceed 50 characters.'
      }
    };

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.status =  [{id: 1, value: 'Select'},
    {id: 2, value: 'Open'},
    {id: 3, value: 'On Hold'},
    {id: 4, value: 'Closed'}];

    this.department = [{id: 1, value: 'Select'},
    {id: 2, value: 'Billing'},
    {id: 3, value: 'Sales'},
    {id: 4 , value: 'Customer Service'},
    {id: 5, value: 'Retention'},
    {id: 6, value: 'Scheduling'}];


    this.ticketForm = this.fb.group({
      ticketTitle: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]],
      ticketDescription: ['', Validators.required],
      ticketStatus: '',
      ticketDepartment: ''
    });


    // Read the ticket Id from the route parameter
    this.sub = this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.getTicket(id);
      }
    );
  }

  onStatusChange(value: any) {
    this.ticketForm = this.fb.group({
      ticketTitle: this.ticketForm.value.ticketTitle,
      ticketDescription: this.ticketForm.value.ticketDescription,
      ticketStatus: value
    });
  }

  onDepartmentChange(value: any) {
    this.ticketForm = this.fb.group({
      ticketTitle: this.ticketForm.value.ticketTitle,
      ticketDescription: this.ticketForm.value.ticketDescription,
      ticketStatus: this.ticketForm.value.ticketStatus,
      ticketDepartment: value
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    merge(this.ticketForm.valueChanges, ...controlBlurs).pipe(
      debounceTime(800)
    ).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.ticketForm);
    });
  }

  addTag(): void {
    this.tags.push(new FormControl());
  }

  deleteTag(index: number): void {
    this.tags.removeAt(index);
    this.tags.markAsDirty();
  }

  getTicket(id: any): void {
    this.ticketService.getTicket(id)
      .subscribe(
        (ticket: Ticket) => this.displayTicket(ticket),
        (error: any) => this.errorMessage = <any>error
      );
  }

  displayTicket(ticket: Ticket): void {
    if (this.ticketForm) {
      this.ticketForm.reset();
    }
    this.ticket = ticket;
    if (this.ticket._id == 0) {
      this.pageTitle = 'Add Ticket';
    } else {
      this.pageTitle = `Edit Ticket: ${this.ticket.title}`;
    }

    // Update the data on the form
    this.ticketForm.patchValue({
      ticketTitle: this.ticket.title,
      ticketDescription: this.ticket.description,
      ticketStatus: this.ticket.status,
      ticketDepartment: this.ticket.department,
    });
  }

  deleteTicket(): void {
    if (this.ticket._id == 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the ticket: ${this.ticket.title}?`)) {
        this.ticketService.deleteTicket(this.ticket._id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }

  saveTicket(): void {
    if (this.ticketForm.valid) {

    //  if (this.ticketForm.dirty) {

        // Copy over all of the original ticket properties
        // Then copy over the values from the form
        // This ensures values not on the form, such as the Id, are retained
        const p = { ...this.ticket, ...this.ticketForm.value };

        if (p._id == 0) {
          this.ticketService.createTicket(p)
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => this.errorMessage = <any>error
            );
        } else {
          this.ticketService.updateTicket(p)
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => this.errorMessage = <any>error
            );

        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.ticketForm.reset();
    this.router.navigate(['/tickets']);
  }
}
