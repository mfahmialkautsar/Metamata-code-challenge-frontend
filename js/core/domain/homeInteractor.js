class HomeUseCase {
    getData() {}
}

export class HomeInteractor extends HomeUseCase {
    repository;
    constructor(repository) {
        super();
        this.repository = repository;
    }

    getData() {
        return this.repository.getData();
    }
}
