//             InputField (parent)
//                 type
//             CheckBox (child)
// let c : CheckBox = new CheckBox()
// let i : InputField = new InputField("checkbox")
class InputField {
    constructor(type) {
        this.input = document.createElement("input");
        this.input.type = type;
        document.body.appendChild(this.input);
        this.input.addEventListener("blur", () => this.checkRequired());
    }
    checkRequired() {
        if (this.isEmpty()) {
            console.log("This is a required field!!!");
        }
    }
    isEmpty() {
        return (this.input.value == "");
    }
}
/// <reference path="inputfield.ts" />
class CheckBox extends InputField {
    constructor() {
        super("checkbox");
        console.log("Checkbox created");
    }
    isEmpty() {
        return (!this.input.checked);
    }
}
class Main {
    constructor() {
        console.log("Main created");
        let textField = new TextField();
        let numericField = new NumericField();
        let checkbox = new CheckBox();
    }
}
window.addEventListener("load", () => new Main());
/// <reference path="inputfield.ts" />
class NumericField extends InputField {
    constructor() {
        super("number");
        console.log("Numeric field created");
    }
}
/// <reference path="inputfield.ts" />
class TextField extends InputField {
    constructor() {
        super("text");
    }
}
//# sourceMappingURL=main.js.map