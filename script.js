function loadXMLDoc(filename) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", filename, false); 
    xhttp.send();
    return xhttp.responseXML;
}

function transformXML() {
    let xml = loadXMLDoc("recipes.xml");
    let xsl = loadXMLDoc("recipes.xsl"); 

    if (window.ActiveXObject || "ActiveXObject" in window) {
        let ex = xml.transformNode(xsl); 
        document.getElementById("output").innerHTML = ex; 
    } else if (document.implementation && document.implementation.createDocument) {
        let xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        let resultDocument = xsltProcessor.transformToFragment(xml, document); 
        document.getElementById("output").appendChild(resultDocument); 
    }
}

function queryXML() {
    let xml = loadXMLDoc("recipes.xml"); 
    let query = document.getElementById("xpathQuery").value;
    let output = document.getElementById("queryOutput");
    output.innerHTML = ""; 

    try {
        let result = xml.evaluate(query, xml, null, XPathResult.ANY_TYPE, null);
        let node = result.iterateNext();

        while (node) {
            output.innerHTML += "<p>" + node.textContent + "</p>";
            node = result.iterateNext();
        }
    } catch (e) {
        console.log("Invalid XPath Query"); 
        output.innerHTML = "<p style='color:red;'>Invalid XPath Query</p>"; 
    }
}

window.onload = function() {
    transformXML();
};
