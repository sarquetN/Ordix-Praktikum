
function cipher(event) {
    event.preventDefault();

    let word = document.querySelector(".input1").value;

    if(word){

        let result = "";

        for (let i = 0; i < word.length; i++){
            let char = word[i];
            
            if(char.match(/[a-z]/)){
                let code = char.charCodeAt(0);
                code = (code - 97 + 4) % 26 + 97;
                char = String.fromCharCode(code);
                
            }if(char.match(/[A-Z]/)){
                let code = char.charCodeAt(0);
                code = (code - 65 + 4) % 26 + 65;
                char = String.fromCharCode(code);                
            }


            result += char;
        
        }        
        document.querySelector(".output1").textContent = result;
    }

};

function decipher(event) {
    event.preventDefault();

    let word = document.querySelector(".input2").value;
    //console.log(word);

    if(word){

        let result = "";

        for (let i = 0; i < word.length; i++){
            let char = word[i];
            
            if(char.match(/[a-z]/)){
                let code = char.charCodeAt(0);
                code = (code - 97 - 4 +26) % 26 + 97;
                char = String.fromCharCode(code);
                
            }if(char.match(/[A-Z]/)){
                let code = char.charCodeAt(0);
                code = (code - 65 - 4 +26) % 26 + 65;
                char = String.fromCharCode(code);                
            }


            result += char;
        
        }; 
        
        document.querySelector(".output2").textContent = result;

    };

};
