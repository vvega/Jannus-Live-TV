module.exports = [ {
    isApi: true,
    priority: 1000.0002,
    key: "View",
    style: {
        height: Ti.UI.SIZE,
        layout: "vertical"
    }
}, {
    isApi: true,
    priority: 1000.0003,
    key: "Label",
    style: {
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "Picker",
    style: {
        width: Ti.UI.FILL
    }
}, {
    isApi: true,
    priority: 1000.0005,
    key: "TextField",
    style: {
        width: Ti.UI.FILL,
        height: "60dp",
        top: "10dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    }
}, {
    isApi: true,
    priority: 1000.0006,
    key: "Button",
    style: {
        width: Ti.UI.FILL,
        height: "68dp",
        top: "10dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    }
}, {
    isClass: true,
    priority: 10000.0001,
    key: "container",
    style: {
        navBarHidden: "true",
        orientation: Ti.UI.PORTRAIT,
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "black",
        backgroundImage: "/images/background.png"
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "header",
    style: {
        width: Ti.UI.FILL,
        height: "75dp",
        backgroundColor: "#A50"
    }
}, {
    isClass: true,
    priority: 10000.0008,
    key: "pageTitle",
    style: {
        font: {
            fontSize: "24dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    }
}, {
    isClass: true,
    priority: 10000.0009,
    key: "ldpi",
    style: {
        font: {
            fontSize: "9dp",
            fontWeight: "normal"
        }
    }
}, {
    isClass: true,
    priority: 10000.001,
    key: "mdpi",
    style: {
        font: {
            fontSize: "12dp",
            fontWeight: "normal"
        }
    }
}, {
    isClass: true,
    priority: 10000.0011,
    key: "hdpi",
    style: {
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0012,
    key: "xhdpi",
    style: {
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        }
    }
} ];