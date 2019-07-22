import React from "react";
import ContentEditable from "react-contenteditable";

class EditTitle extends React.Component {
  constructor() {
    super();
    this.contentEditable = React.createRef();
    this.state = { html: "Entrez le titre ici" };
  }

  handleChange = evt => {
    if (this.state.html === "Entrez le titre ici") {
      this.setState({ html: "" });
    }
    const titleDiv = document.getElementById("title");
    const titleContainer = document.getElementById("title-container");
    // si il y a overflow, ne pas mettre à jour l'état
    // et faire passer le cadre à rouge
    if (titleDiv.clientHeight > titleContainer.clientHeight) {
      titleContainer.setAttribute("class", "title red-border");
      this.setState({ html: this.state.html.replace(/&nbsp;/g, "") });
    }
    //sinon retirer le cadre rouge et mettre à jour l'état
    else {
      titleContainer.setAttribute("class", "title");
      this.setState({ html: evt.target.value });
    }
  };

  pasteAsPlainText = event => {
    event.preventDefault();
    const text = event.clipboardData.getData("text/plain");
    console.log(text);
    document.execCommand("insertHTML", false, text); //(aCommandName, aShowDefaultUI, aValueArgument)
  };

  render = () => {
    var cleanString = this.state.html.replace(/&nbsp;/g, " ").toUpperCase();
    return (
      <ContentEditable
        innerRef={this.contentEditable}
        html={cleanString} // innerHTML of the editable div
        disabled={false} // use true to disable editing
        onChange={this.handleChange} // handle innerHTML change
        onPaste={this.pasteAsPlainText}
        tagName="h1" // Use a custom HTML tag (uses a div by default)
        id="title"
      />
    );
  };
}

export default EditTitle;
