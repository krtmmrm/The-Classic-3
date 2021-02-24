import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Faq");
    }

    async getHtml() {
        return `
            <div class="content_wrapper">
                <h1>FAQ<h1>
            </div> 
        `;
    }
}