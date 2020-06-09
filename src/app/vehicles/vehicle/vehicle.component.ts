import { VehicleService } from './../../shared/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor(
    private service: VehicleService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm) {
    if (form !=null)
      form.resetForm();
    this.service.formData = {
      id: null,
      placa: '',
      chassi: '',
      renavam: '',
      modelo: '',
      marca: '',
      ano: ''
    }
  } 

  onSubmit(form: NgForm) {
    if (form.value.id == null) 
      this.insert(form);
    else
      this.update(form);
  }

  insert(form: NgForm) {
    this.service.postVehicle(form.value).subscribe(res => {
      this.toastr.success('inserido com sucesso.', 'Cadastro de veículos');
      this.resetForm(form);
      this.service.getVehicle();
    });
  }

  update(form: NgForm) {
    this.service.putVehicle(form.value).subscribe(res => {
      this.toastr.info('atualizado com sucesso.', 'Cadastro de veículos');
      this.resetForm(form);
      this.service.getVehicle();
    });
  }

}
