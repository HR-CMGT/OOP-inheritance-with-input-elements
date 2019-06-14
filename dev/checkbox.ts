/// <reference path="inputfield.ts" />

class CheckBox extends InputField {

    checked : boolean

    constructor() {
        super("checkbox")
        console.log("Checkbox created")   
    }

    public isEmpty() : boolean {
        return (!this.input.checked)
    }
}