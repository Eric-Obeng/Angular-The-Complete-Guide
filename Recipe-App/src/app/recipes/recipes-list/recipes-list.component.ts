import { Component } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css',
})
export class RecipesListComponent {
  recipes: Recipes[] = [
    new Recipes('A test recipe', 'this is simply a test', 'https://imgs.search.brave.com/-8N5Uz1DG7V4kc87-yoOzCwLOV1HiQNPtjb79oI8n6c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9kZWxp/c2gtMjAyMTA1LWNv/cHljYXRjaGlrLWZp/bC1hLW51Z2dldHNz/YXVjZS0xMDEtbHMt/MTYyMTYzMDI0OS5q/cGc_Y3JvcD0wLjY2/OHh3OjEuMDB4aDsw/LjEwOXh3LDAmcmVz/aXplPTM2MDoq')
  ];
}
