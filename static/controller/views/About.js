import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <div class="content_wrapper">
                <h1>About</h1>
            </div> 
        `;
    }
}