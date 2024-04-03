import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  searchByCountry(country: string): void {

    this.isLoading = true;

    this.countriesService.searchCountry(country).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }

}
