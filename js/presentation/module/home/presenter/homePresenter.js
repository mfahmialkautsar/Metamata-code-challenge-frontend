import { App } from "/js/app/app.js";

export class HomePresenter {
    useCase;
    _ = new App();

    constructor(useCase) {
        this.useCase = useCase;
    }

    addFavoriteButtonListener(loveButtons) {
        Array.from(loveButtons).forEach(this.favoriteButtonListener.bind(this));
    }

    favoriteButtonListener(love) {
        const self = this;
        this.setButton(love);
        love.addEventListener("click", (love) => {
            const recipeId = love.target.dataset.recipeId;
            self.doFavorite(recipeId);
            self.setButton(love.target);
        });
    }

    doFavorite(id) {
        this.isFavorited(id)
            ? localStorage.removeItem(id)
            : localStorage.setItem(id, id);
    }

    isFavorited(id) {
        if (localStorage.getItem(id) == null) {
            return false;
        } else {
            return true;
        }
    }

    setButton(love) {
        const id = love.dataset.recipeId;
        if (this.isFavorited(id)) {
            love.classList.remove("fa-heart-o");
            love.classList.add("fa-heart");
        } else {
            love.classList.add("fa-heart-o");
            love.classList.remove("fa-heart");
        }
    }

    getData() {
        return this.useCase.getData();
    }
}
