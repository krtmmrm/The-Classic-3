import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Register");
    }

    async getHtml() {
        return `
            <div class="content_wrapper">
                <div class="register_wrapper">
                    <div class="form_wrapper">
                        <h2>Sign Up</h3>
                        <p>Join a community of leaders</p>
                        <form action="submit">
                            <input type="email" placeholder="Email">
                            <input type="password" placeholder="Password">
                            <input type="submit" class="submit">
                        </form>
                    </div>
                </div>
                <div class="gif_wrapper">
                    <img src="assets/Character.png" alt="">
                </div>
            </div> 
        `;
    }
}