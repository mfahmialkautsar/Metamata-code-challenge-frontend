import { HomePresenter } from "/js/presentation/module/home/presenter/homePresenter.js";
import { Injection } from "/js/core/di/di.js";

export class Scene {
    homeInteractor = Injection.getInstance().provideHome();
    homePresenter = new HomePresenter(this.homeInteractor);
    
    constructor() {
        return this.homePresenter
    }
}