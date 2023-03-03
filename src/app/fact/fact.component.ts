import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css'], 
})

export class FactComponent{

  fact: string = "";
  renderFact: boolean = false;

  async getFact(): Promise<void> {
    let response = await fetch("https://api.chucknorris.io/jokes/random", {method: "GET"})
    let data = await response.json();
    this.fact = data.value;
    this.renderFact = true;
  }
}
