module.exports = Element

function Element(svgText) {
    var parser = new DOMParser()
        , xmlText =  "<svg xmlns=\'http://www.w3.org/2000/svg\'>" +
            svgText + "</svg>"
        , docElem = parser.parseFromString(xmlText, "text/xml").documentElement

    var node = docElem.firstChild
    document.importNode(node, true)
    return node
}