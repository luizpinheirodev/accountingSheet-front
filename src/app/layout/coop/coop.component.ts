import {Component, OnInit} from '@angular/core';
import {Coop} from './coop.model';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {CoopService} from './coop.service';

@Component({
  selector: 'app-coop',
  templateUrl: './coop.component.html',
  styleUrls: ['./coop.component.css']
})
export class CoopComponent implements OnInit {

  coops: Coop[];
  newCoop: Coop = new Coop();

  coopForm: FormGroup;

  constructor(private coopService: CoopService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.coopForm = this.formBuilder.group({
      number: this.formBuilder.control('', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]),
      name: this.formBuilder.control('', Validators.required)
    });
    this.getCoops();
  }

  getCoops() {
    this.coopService.getCoops().subscribe(coops => this.coops = coops);
  }

  createCoop(coop: Coop) {
    this.coopService.addCoop(coop).subscribe(() => {
      console.log(`Coop cadastrada com sucesso`);
      this.coops = [];
    });
  }

  /*
  createCoop(coopForm: NgForm): void {
    this.coopService.addCoop(this.newCoop).then(createCoop => {
      coopForm.reset();
      this.newCoop = new Coop();
      this.coops.unshift(createCoop);
    });
  }
  */

  deleteCoop(id: string): void {
  }

  updateCoop(coopData: Coop): void {
  }

}
