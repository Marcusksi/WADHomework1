let dataGlobal;
const getData = async () => {
    let url = 'https://api.jsonbin.io/v3/b/65439ab012a5d3765993de71';
    const response = await fetch(url);
    const data = await response.json();
    dataGlobal = data;
    //return data;
};

(async () => {
    await getData();
    console.log(dataGlobal);

    dataGlobal.record.forEach(element => {
        let sel = document.getElementById("sel"); //selection element where posts go
        
        let div = document.createElement('div'); //div 
        div.classList.add('box');
        sel.appendChild(div);

        let ul = document.createElement('ul'); //ul
        ul.classList.add('post');
        div.appendChild(ul);

        //profile
        let liProfile = document.createElement('li');
        ul.appendChild(liProfile);

        let aProfile = document.createElement('a');
        aProfile.href = "#";
        aProfile.classList.add('profile');
        liProfile.appendChild(aProfile);

        let imgProfile = document.createElement("img");
        imgProfile.src = element.profile;
        imgProfile.alt = "Profile picture";
        imgProfile.width = "60";
        aProfile.appendChild(imgProfile);

        //date
        let liDate = document.createElement('li');
        ul.appendChild(liDate);

        let pDate = document.createElement('p');
        pDate.classList.add("date");
        let textDate = document.createTextNode(element.creationTime);
        liDate.appendChild(pDate);
        pDate.appendChild(textDate);
        
        //picture
        if (element.picture != "") {
            let aPicture = document.createElement('a');
            aPicture.href = element.picture;
            aPicture.classList.add('picture')
            ul.appendChild(aPicture);

            let imgPicture = document.createElement("img");
            imgPicture.src = element.picture;
            imgPicture.alt = "Post picture";

            imgPicture.onload = function(){
                imgPicture.width = this.width*0.75;
            }
            aPicture.appendChild(imgPicture);
        }
        
        //body text
        let pBody = document.createElement('p');
        let textBody = document.createTextNode(element.body);
        ul.appendChild(pBody);
        pBody.appendChild(textBody);

        //reaction
        let aReaction = document.createElement('a');
        aReaction.href = element.reaction;
        aReaction.classList.add('reaction')
        ul.appendChild(aReaction);

        let imgReaction = document.createElement("img");
        imgReaction.src = element.reaction;
        imgReaction.width = 30;
        imgReaction.alt = "Reaction picture";
        aReaction.appendChild(imgReaction);
    });

})();

