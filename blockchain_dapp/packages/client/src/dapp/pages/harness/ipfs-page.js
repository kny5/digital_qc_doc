import "../components/page-panel.js";
import "../components/page-body.js";
import "../../../lib/components/shared/action-card.js";
import "../../../lib/components/widgets/text-widget.js";
import "../../../lib/components/widgets/number-widget.js";
import "../../../lib/components/widgets/account-widget.js";
import "../../../lib/components/widgets/upload-widget.js";
// TODO: Move references to upload widget
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
// End TODO
import DappLib from "@trycrypto/dappstarter-dapplib";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("ipfs-page")
export default class IpfsPage extends LitElement {
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
    this.mode = 'folder';
    this.files = [];
    this.eventHandlerRegistered = false;
    if (!this.eventHandlerRegistered) {
      this.eventHandlerRegistered = true;
      DappLib.onAddIpfsDocument(result => {
        let resultPanel = this.querySelector("#resultPanel");
        resultPanel.prepend(DappLib.getFormattedResultNode(result));
        resultPanel.open();
      });
    }
  }

  render() {
    let content = html`
      <page-body
        title="${this.title}"
        category="${this.category}"
        description="${this.description}"
      >

            <action-card
                title="Add QC std Document" description="Upload a QC std document to IPFS and add hash to contract"
                action="addIpfsDocument" method="post" fields="files label mode"
                target="card-body-addIpfsDocument"
                message="Waiting for IPFS upload and smart contract transaction">
                    <text-widget
                        field="label" label="ID"
                        placeholder="Insert a Product ID">
                    </text-widget>

                    <upload-widget data-field="files"
                        field="file" label="File${
                          this.mode !== "single" ? "s" : ""
                        }"
                        placeholder="Select file${
                          this.mode !== "single" ? "s" : ""
                        }"
                        multiple="${this.mode !== "single" ? "true" : "false"}">
                    </upload-widget>
                    <input type="hidden" data-field="mode" value="${
                      this.mode
                    }" style="display:none;"></input>
            </action-card>

      </page-body>
      <page-panel id="resultPanel"></page-panel>
    `;
    return content;
  }
}
