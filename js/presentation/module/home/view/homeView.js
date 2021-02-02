import { Scene } from "/js/app/scene.js";

class HomeView {
    homePresenter = new Scene();
    recipeContainer = document.getElementById("recipe-container");
    
    createRecipeItem(recipe) {
        const recipeItem = document.createElement("div");
        recipeItem.setAttribute("class", "recipe-item");
        recipeItem.innerHTML = `
        <a href="#" class="nodecor-link">
            <img src="${recipe.img}" alt="">
            <div class="infobar">
                <span id="title-recipe">${recipe.name}</span>
            </div>
        </a>
        <i data-recipe-id = "${recipe.id}" class="button-favorite fa fa-heart-o fa-lg"></i>
        `;
        return recipeItem;
    }

    constructor() {
        this.homePresenter.getData().forEach((recipe) => {
            this.recipeContainer.appendChild(this.createRecipeItem(recipe));
        });
        
        const favoriteButton = document.getElementsByClassName("button-favorite");
        this.homePresenter.addFavoriteButtonListener(favoriteButton);
    }
}

const _ = new HomeView();