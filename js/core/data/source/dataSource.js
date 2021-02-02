import { DataDummy } from "/js/dummy.js";

class DataSourceInterface {
    getData() {}
}

export class DataSource extends DataSourceInterface {
    dummy = new DataDummy();
    static getInstance() {
        return new DataSource();
    }

    getData() {
        return this.dummy.data;
    }
}
