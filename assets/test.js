let xmlText ="";
fetch("lyrics.xml").then(resp=>{
    resp.text().then(data =>{
        xmlText = data;
        let parse = new DOMParser();
        let xmlDom = parse.parseFromString(xmlText, "application/xml");
        let lyrics = xmlDom.querySelectorAll("data");
        console.log(lyrics);
    })
})