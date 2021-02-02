import { DataRepository } from "/js/core/data/dataRepository.js";
import { DataSource } from "/js/core/data/source/dataSource.js";
import { HomeInteractor } from "/js/core/domain/homeInteractor.js";

export class Injection {
    static getInstance() {
        return new Injection();
    }

    provideRepository() {
        const remote = DataSource.getInstance();
        return new DataRepository(remote);
    }

    provideHome() {
        const repository = this.provideRepository();
        return new HomeInteractor(repository);
    }
}
