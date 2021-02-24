import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Contact");
    }

    async getHtml() {
        return `
            <div class="content_wrapper">
                <h1>Contact<h1>
            </div> 
        `;
    }
}