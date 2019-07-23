import React from "react";
import ContentEditable from "react-contenteditable";

class EditText extends React.Component {
  constructor() {
    super();
    this.contentEditable = React.createRef();
    this.state = { html: "Entrez le corps de l'article ici" };
  }

  handleChange = evt => {
    const contentDiv = document.getElementById("content");
    const contentContainer = document.getElementById("content-container");
    // si il y a overflow, ne pas mettre à jour l'état
    if (contentDiv.clientHeight > contentContainer.clientHeight) {
      this.setState({ html: this.state.html });
    } else {
      this.setState({ html: evt.target.value });
    }
  };

  pasteAsPlainText = event => {
    event.preventDefault();
    const text = event.clipboardData.getData("text/plain").slice(0, 195);
    document.execCommand("insertHTML", false, text); //(aCommandName, aShowDefaultUI, aValueArgument)
  };

  render = () => {
    return (
      <ContentEditable
        innerRef={this.contentEditable}
        html={this.state.html} // innerHTML of the editable div
        disabled={false} // use true to disable editing
        onChange={this.handleChange} // handle innerHTML change
        onPaste={this.pasteAsPlainText}
        tagName="p" // Use a custom HTML tag (uses a div by default)
        id="content"
      />
    );
  };
}

export default EditText;
