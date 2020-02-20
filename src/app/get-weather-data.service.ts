import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GetWeatherDataService {

  private lat;
  private lon;
  
  private proxy = "https://cors-anywhere.herokuapp.com/"

  public currentCityAndCountry = new Subject<any>();
  public proccessedReq = new Subject<any>();
  public forecastReq = new Subject<any>();
  public detailForecastReq = new Subject<any>();

  private positionCode = null;
  private positionGeometry = null;

  
  private GOOGLE_API_KEY = environment.GOOGLE_API_KEY;
  private DARKSKY_API_KEY = environment.DARKSKY_API_KEY;


  private googleReverseGeocodingApo = 'https://maps.googleapis.com/maps/api/geocode/json';



  constructor(private http: HttpClient) { }



  getCurrentWeather()  {
      this.getCurrentLocation().then(position => {
        this.getLocationInformation(position).then(position => {
          
          if(position.status=='OK') {
            this.positionCode = position.plus_code.compound_code;
            this.positionGeometry = position.results[0].geometry.location
          }
            
          this.currentCityAndCountry.next(this.positionCode);

          this.getWeatherInformation(this.positionGeometry, 'minutely,daily,flags,alerts').then(weatherData => {
            this.processWeather(weatherData);
          });
        })
    });
  }

  getForecastWeather() {
    this.getWeatherInformation(this.positionGeometry, 'currently,minutely,hourly,flags,alerts').then(weatherData => {
      this.processForecast(weatherData);
    });
  }

  getDetailForecastWeather(date:number) {
    this.getWeatherInformation(this.positionGeometry, 'currently,minutely,daily,flags,alerts', date).then(weatherData => {
      this.processDetailForecast(weatherData);
    });
  }






  getCurrentLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => { 
        resolve({
          lat: position.coords.latitude, 
          lng: position.coords.longitude
        });
      },
      err => {
        reject(err);
      });
    });
  }





  getLocationInformation(position: {lat: number, lng: number}): Promise<any> {
    this.googleReverseGeocodingApo += `?latlng=${position.lat},${position.lng}&key=${this.GOOGLE_API_KEY}`;
  
    return new Promise((resolve, reject) => {
      this.http.get(this.googleReverseGeocodingApo).subscribe(res => {
        resolve(res);
      },
      err => {
        reject(err);
      });
    });
  }


  getWeatherInformation(position: {lat: number, lng: number}, excludedInReq, time?): Promise<any> {
    let reqUrl = ""
      + this.proxy
      +`https://api.darksky.net/forecast/${this.DARKSKY_API_KEY}/`
      +`${position.lat},${position.lng}`;

    if(time) {
      reqUrl += ','+time;
    }

    reqUrl += `?units=si&exclude=[${excludedInReq}]`;
    
    
    return new Promise((resolve, reject) => {
      this.http.get(reqUrl).subscribe(res => {
        resolve(res);
      },
      err => {
        reject(err);
      });
    });
  }




  processWeather(weatherData) {
    this.proccessedReq.next(weatherData);
  }

  processForecast(weatherData) {
    this.forecastReq.next(weatherData);
  }

  processDetailForecast(weatherData) {
    this.detailForecastReq.next(weatherData);
  }



  fahrenheitToCelsius(degInFahrenheit: number) {
    return ((degInFahrenheit-32)*5)/9;
  }

  kelvinToCelsius(degInKelvin: number) {
    return degInKelvin - 273.15;
  }
}
