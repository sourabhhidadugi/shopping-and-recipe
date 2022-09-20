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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AE0C-w_ZsrNPMc3OluLNmiqV0hOzdjt-8A&usqp=CAU'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
