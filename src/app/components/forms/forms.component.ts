import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CountryI, CityI } from '../../models/model.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  selectCountry: CountryI = {id:0, name:''};
  countries! : CountryI[];
  cities: CityI[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.countries = this.dataService.getCountries();
  }

  onSelect(id: number){
    console.log('id: ', id);
    this.cities = this.dataService.getCities().filter(c=> c.countryId == id);
  }
}
