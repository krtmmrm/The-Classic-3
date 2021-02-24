import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Projects");
    }

    async getHtml() {
        return `
            <div class="content_wrapper">
                <h1>Projects<h1>
            </div> 
        `;
    }
}