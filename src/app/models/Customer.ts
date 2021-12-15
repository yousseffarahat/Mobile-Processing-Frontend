export class Customer{
  name: string;
  phone: string;
  country: string;
  countryCode: string;
  state: boolean;

  constructor(name: string, phone: string, country: string, countryCode: string, state: boolean) {
    this.name = name;
    this.phone = phone;
    this.country = country;
    this.countryCode = countryCode;
    this.state = state;
  }
}
