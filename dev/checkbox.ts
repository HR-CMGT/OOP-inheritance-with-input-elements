/// <reference path="inputfield.ts" />

class CheckBox extends InputField {

    checked : boolean

    constructor() {
        super("checkbox")
        console.log("Checkbox created")   
    }

    /**
     * This function OVERRIDES the default behavior. 
     * A 'empty' check for a checkbox is diffrent.
     */
    protected isEmpty() : boolean {
        return (!this.input.checked)
    }
}