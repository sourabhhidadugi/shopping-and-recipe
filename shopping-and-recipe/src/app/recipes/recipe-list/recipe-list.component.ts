import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe(
      'test',
      'this is a test',
      'https://www.pexels.com/photo/pancake-with-sliced-strawberry-376464/'
    ),
    new Recipe(
      'test',
      'this is a test',
      'https://www.pexels.com/photo/pancake-with-sliced-strawberry-376464/'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
