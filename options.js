 //function ejecutar () {
    let title = document.title;
    let bc1 = document.querySelector(".fgx-brand-accordion-item ");//Container Options
    let divs = bc1.querySelectorAll('div');
    let h2 = bc1.querySelectorAll('h2');
    //Mapear array de divs:
    let rows = [];
    let liArray = [];
    let liUl = []
    let i = 0;
    let ulconsole = [];
    let liconsole =[];
    //Recorre divs y captura articles
    //let div1 = divs[i].querySelectorAll('article');
    
    for (let i=0;i<divs.length; i++){
    let div1 = divs[i].querySelectorAll('article');
    let h2Text = h2[i].innerText;
    //Recorre article y captura h3, h4 y ul
        for (let j=0; j<div1.length; j++){
            let h3 = div1[j].querySelector('h3').innerText; 
            let h4 = div1[j].querySelectorAll('h4');
            let ul = div1[j].querySelectorAll('ul');
            ulconsole = ul;
            // Recorre ul y toma los li
                for (let g=0; g<ul.length; g++){
                    //if (ul.length ){}
                    let li = ul[g].querySelectorAll('li');
                    liconsole = li;
                //Recorre li
                    for (let k=0;k<li.length;k++){
                        let liText = li[k].innerText;
                        let parts = liText.split('\n')
                        let restructuredString = parts[0];
                        liArray.push([h2Text,'"'+h3+'"','"'+h4[g].innerText+'"','"' + restructuredString + '"']);
                    } liUl.push([liArray]);    
                }
            //}

        }
        //console.log(liArray);
    }console.log('esto es LiArray: ',liArray);


    let csvContent = "data:text/csv;charset=utf-8,";
    liArray.forEach(function(rowArray) {
    let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${title}`);
    document.body.appendChild(link); // Required for FF
    console.log(csvContent)
    link.click(); 
