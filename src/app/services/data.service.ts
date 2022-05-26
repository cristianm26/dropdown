import { Injectable } from '@angular/core';
import { CityI, CountryI } from '../models/model.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private countries : CountryI[] = [
    {
      id:0,
      name:'Selecciona un País'
    },
    {
      id: 1,
      name: 'Mexico'
    },
    {
      id: 2,
      name: 'España'
    },
    {
      id: 3,
      name: 'Argentina'
    },
    {
      id: 4,
      name: 'Ecuador'
    },
  ];

  private cities : CityI[] = [
    {
      id: 1,
      countryId: 1,
      name: 'Mexico City'
    },
    {
      id: 2,
      countryId: 1,
      name: 'Guadalajara'
    },
    {
      id: 3,
      countryId: 2,
      name: 'Madrid'
    },
    {
      id: 4,
      countryId: 2,
      name: 'Barcelona'
    },
    {
      id: 5,
      countryId: 3,
      name: 'Buenos Aires'
    },
    {
      id: 6,
      countryId: 3,
      name: 'Córdoba'
    },
    {
      id: 7,
      countryId: 4,
      name: 'Quito'
    },
    {
      id: 8,
      countryId: 4,
      name: 'Riobamba'
    },
  ];
  constructor() { }

  getCountries(): CountryI[]{
    return this.countries;
  }

  getCities(): CityI[]{
    return this.cities;
  }
}
