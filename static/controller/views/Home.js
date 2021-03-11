import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("MK");
    }

    async getHtml() {
        return `
            <div class="content">
                <h1>Let's build solutions</h1>
                <P>Every year, an increasing number of tech professionals and engineers show interest in starting their entrepreneurial journey.</P>
                <button class="call_action">Start now</button>
            </div>
            <div class="image">
            <img src="../../assets/Character.png" >
            </div>
        `;
    }
}