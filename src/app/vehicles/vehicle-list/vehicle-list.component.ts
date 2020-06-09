import { ToastrService } from 'ngx-toastr';

import { VehicleService } from './../../shared/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/shared/vehicle.model';


@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  listVehicles: any = [];

  constructor(
    private service: VehicleService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.loadVehicle()
  }

  loadVehicle() {
    return this.service.getVehicle().subscribe((data: {}) => {
      this.listVehicles = data;
    })
  }

  editForm(data: Vehicle) {
    this.service.formData = Object.assign({}, data);
  }

  onDelete(id: number) {
    if (confirm('Deseja realmente apagar?')) {
      this.service.deleteVehicle(id).subscribe(res => {
        this.service.getVehicle();
        this.toastr.warning('Deletado com sucesso', 'Cadastro de veículos');
      });
    }
  }
}
