import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('TestRecipe', 'This is simply a test', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('TestRecipe2', 'This is simply a test2', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('TestRecipe3', 'This is simply a test3', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
