class InputField {
    
    private id      : string
    private class   : string
    private value   : string
    private name    : string
    private type    : string

    protected input : HTMLInputElement

    constructor(type : string) {
        this.input       = document.createElement("input")
        this.input.type  = type
            
        document.body.appendChild(this.input)

        this.input.addEventListener("blur", () => this.checkRequired())
    }
    private checkRequired() {
        if(this.isEmpty()) {
            console.log("This is a required field!!!")
        }
    }
    public isEmpty() : boolean {
        return (this.input.value == "")
    }
}