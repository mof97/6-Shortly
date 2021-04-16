//change img 

if(window.innerWidth < 990){
    document.querySelector(".short-img").src = "img/svg/bg-shorten-mobile.svg";
}else{
    document.querySelector(".short-img").src = "img/svg/bg-shorten-desktop.svg";
}

window.onresize = function(){
    if(window.innerWidth < 990){
        document.querySelector(".short-img").src = "img/svg/bg-shorten-mobile.svg";
    }else{
        document.querySelector(".short-img").src = "img/svg/bg-shorten-desktop.svg";
    }
}


// short link

function short () {
    var linkInput = document.querySelector(".input-link"),
        create = document.querySelector(".create"),
        worrng = document.querySelector(".worrng")

        


    create.onclick = function(e){
        e.preventDefault();
        // random string
        let arr = ["a","b","c","d","e","f","g","h","i","g","k","l"],
        short_str="";
        for(i = 1 ; i <= 6 ;i++){
           let rando = arr[Math.floor(Math.random() * arr.length)];
            short_str+=rando
        }

        //condition for adding link

        if(linkInput.value.startsWith("https://") || linkInput.value.startsWith("http://")){
            //create element    
            var one = document.createElement('div');
                span = document.createElement('span');
                div = document.createElement('div');
                finalLink = document.createElement('span'),
                button = document.createElement('button');
                

            // adding class to element
            one.classList.add("one");
            span.classList.add("link");
            button.classList.add("my-btn");
            finalLink.classList.add("short-link")

            //change element texet
            span.innerHTML = linkInput.value
            finalLink.innerHTML = "https://rel.link/"+short_str;
            button.innerHTML = "Copy ?"
            // append chiled to father
            document.querySelector(".linkat").appendChild(one)
            one.appendChild(span);
            one.appendChild(div);
            div.appendChild(finalLink);
            div.appendChild(button);

            

            }else{
                worrng.classList.remove("d-none")
                setTimeout(function(){
                    worrng.classList.add("d-none")
                },3000)
            }

            //add copy event
            button.addEventListener("click",function(){
                this.innerHTML="Coped ✔";
                this.style.backgroundColor ="hsl(257, 27%, 26%)";
                console.log(this.previousSibling.innerHTML)
                window.navigator.clipboard.writeText(this.previousSibling.innerHTML);
                
            })
            
            linkInput.value = ''
        }
    }
short ()
