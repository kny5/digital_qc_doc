import DappLib from "@trycrypto/dappstarter-dapplib";
import DOM from "../../lib/components/shared/dom";
import "../../lib/components/shared/action-card.js";
import "../../lib/components/shared/action-button.js";
import "../../lib/components/widgets/text-widget.js";
import "../../lib/components/widgets/number-widget.js";
import "../../lib/components/widgets/account-widget.js";
import "../../lib/components/widgets/upload-widget.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("dapp-page")
export default class DappPage extends LitElement {
  @property()
  get;
  @property()
  post;
  @property()
  title;
  @property()
  category;
  @property()
  description;

  createRenderRoot() {
    return this;
  }
  constructor(args) {
    super(args);
  }


  render() {
    let content = html`
      <div class="container m-auto">
        <div class="row fadeIn mt-3 p-2 block">
          <h2 class="text-6xl">🎉 Dappiness!</h2>
          <p class="mt-3">
            Your Dapp is ready, and the world is waiting for you to create
            something amazing.
          </p>
          <p class="mt-3">
            You are currently viewing your Dapp in the DappStarter Workspace which
            provides an easy way to switch between the Client, UI Harness and Server
            web apps. You can view any of these in a separate browser tab by clicking the
          </p>
          <h3 class="mt-3 text-3xl">Next Steps</h3>
          <ul class="mt-3 ml-5 list-decimal">
            <li class="mt-3">Interact with the feature modules you selected with the UI Harness</li>
            <li class="mt-3">Customize this page by editing <i>packages/client/src/pages/dapp.js</i></li>
          </ul>
        </div>
      </div>
    `;
    return content;

  }
}
