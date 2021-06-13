import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../services/exchange-rates.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  amount=1;
  rates!:{ [key: string]: number; } ;
  from="USD"
  to ="LBP"
  dates="";

  constructor(private exchangeRates:ExchangeRatesService) { }
    loadRates(){
      this.exchangeRates.getRates(this.from).subscribe(
        res=>
        {this.rates=res.rates;this.dates=res.date;}
        
        );
    }
  convert():number{
    this.amount=this.amount < 0 ? this.amount * -1 : this.amount;
    return this.amount * this.rates[this.to] ;
  }

  ngOnInit(): void {
    this.loadRates();
  }

  getAllCurrency(){
    return Object.keys(this.rates);
  }

}
