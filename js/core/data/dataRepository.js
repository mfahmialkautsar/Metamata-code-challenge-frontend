class DataRepositoryInterface {
    getData() {}
}

export class DataRepository extends DataRepositoryInterface {
    remote;
    constructor(remote) {
        super();
        this.remote = remote;
    }

    static getInstance(remote) {
        return new DataRepository(remote);
    }

    getData() {
        return this.remote.getData();
    }
}
