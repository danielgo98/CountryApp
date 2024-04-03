import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  constructor( private countriesService: CountriesService ) {}

  public countries: Country[] = [];

  public isLoadind: boolean = false;

  searchByCapital(term: string): void {

    this.isLoadind = true;

    this.countriesService.searchCapital(term).subscribe(countries => {
      this.countries = countries;
      this.isLoadind = false;
    });

  }

}
