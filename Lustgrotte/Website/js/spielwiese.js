// Define the source object that we're binding to.
// We use WinJS.Binding.as to set up the observable
// behavior.

var bindSource = WinJS.Binding.as({ x: "initial value for x", y: "initial value for y" });

var xInput = document.getElementsByClassName(".basicBindingX");
var yInput = document.getElementsByClassName(".basicBindingY");
var xOutput = document.getElementsByClassName(".basicBindingXOutput");
var yOutput = document.getElementsByClassName(".basicBindingYOutput");

function onXChanged(newValue, oldValue) {
    // This function is called when the x property of the
    // binding source changes	
    xOutput.textContent = newValue;
}

function onYChanged(newValue, oldValue) {
    // This function is called when the y property of the
    // binding source changes
    yOutput.textContent = newValue;
}

function bindToDataSource() {
    // The object we're binding to was created in the init
    // method. Hook up the change events for each property.

    // First, the x property
    bindSource.bind("x", onXChanged.bind(this));
    
    // And the y property
    bindSource.bind("y", onYChanged.bind(this));
}

function bindToInputChanges() {
    // This method hooks up to changes in the input fields
    // in the HTML. Each field change will set the value
    // of one of the properties on our binding source. That
    // will in turn cause the change events to fire, and
    // update the output display via the onXChanged and
    // onYChanged methods.

    // Set up the X input field
    WinJS.Utilities.query(".basicBindingX")
        // Set up change event handler to update binding source
        // on input changes.
        .listen("change", function () {
            bindSource.x = this.value;
        })
        // Set the initial value to match binding source
        .forEach(function (e) {
            e.value = bindSource.x;
        });

    WinJS.Utilities.query(".basicBindingY")
        // Set up change event handler to update binding source
        // on input changes.
        .listen("change", function () {
            bindSource.y = this.value;
        })
        // Set the initial value to match binding source
        .forEach(function (e) {
            e.value = bindSource.y;
        });
}

bindToDataSource();
bindToInputChanges();

