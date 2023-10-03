import { LightningElement } from "lwc";

export default class SignatureDemo extends LightningElement {
  imgSrc;

  renderedCallback() {
    document.fonts.forEach((font) => {
      if (font.family === "Great Vibes" && font.status === "unloaded") {
        // Ensure that the font is loaded so that signature pad could use it.
        // If you are using a different font in your project, don't forget
        // to update the if-condition above to account for it.
        font.load();
      }
    });
  }

  saveSignature() {
    const pad = this.template.querySelector("c-signature-pad");
    if (pad) {
      const dataURL = pad.getSignature();
      if (dataURL) {
        // At this point you can consume the signature, for example by saving
        // it to disk or uploading it to a Salesforce org/record.
        // Here we just preview it in an image tag.
        this.imgSrc = dataURL;
      }
    }
  }

  clearSignature() {
    const pad = this.template.querySelector("c-signature-pad");
    if (pad) {
      pad.clearSignature();
    }

    this.imgSrc = null;
  }
}
