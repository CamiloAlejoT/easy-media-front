import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { SearchForm } from 'src/app/core/interfaces/forms.interface';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filtet-form',
  templateUrl: './filtet-form.component.html',
  styleUrls: ['./filtet-form.component.scss']
})
export class FiltetFormComponent implements OnChanges {

  @Input() formFields: string[] = [];
  @Output() dataEvent = new EventEmitter<any>();

  searchForm: FormGroup;

  formSetUp: SearchForm = {
    title: { fieldName: 'title', fieldLabel: 'Words to Search?', type: 'text', value: ['', [Validators.required, Validators.maxLength(30)]] },
    date: { fieldName: 'date', fieldLabel: 'Date Select', type: 'date', value: ['', Validators.required] },
    name: { fieldName: 'name', fieldLabel: 'Finf by user', type: 'text', value: ['', Validators.required] }
  }
  isReady: boolean = false

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.searchForm = this.formBuilder.group({
      fieldItems: this.formBuilder.array([]),
    })

    this.searchForm.valueChanges.pipe(debounceTime(500))
      .subscribe((event) => this.dataEvent.emit(event['fieldItems']))
  }

  get fieldItems() {
    return this.searchForm.get('fieldItems') as FormArray;
  }


  ngOnChanges() {
    this.formFields?.forEach(key => {
      const newGroup = this.formBuilder.group(this.formSetUp[key as keyof SearchForm])
      this.fieldItems.push(newGroup)
    })
    this.searchForm
    this.isReady = true
  }

  get searchFormFields() {
    return this.searchForm.get('searchFormFields') as FormArray
  }


  onSubmit() {
    console.log(this.searchForm.value);

  }
}
