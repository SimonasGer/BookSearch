const buttonEnable = () => {
    document.querySelector("input").addEventListener("input", (e) => {
        if(document.querySelector("input").value==="") { 
            document.querySelector('button').disabled = true; 
        } else { 
            document.querySelector('button').disabled = false;
        } 
    })
    
   }

export default buttonEnable;