export class App {
    body = document.body;
    container = document.getElementById("container");

    constructor() {
        this.getHeader();
        this.getFooter();
    }

    getHeader() {
        const header = document.createElement("header");
        header.innerHTML = `
        <span id="title-header">RecipeBooks</span>
        `;
        this.body.insertBefore(header, this.body.childNodes[0]);
    }

    getFooter() {
        const footer = document.createElement("footer");
        footer.innerHTML = `
        <span id="title-footer">Developed by Fahmi</span>
        `;
        this.body.appendChild(footer);
    }
}
