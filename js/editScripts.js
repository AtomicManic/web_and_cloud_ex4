window.onload = () => {
    const subBttn = document.getElementById("submit-btn");
    console.log(subBttn);

    
    document.getElementById("submit-btn").onclick = () => {
        //Name validation

        
        let fail = 0;
        let name = document.getElementById("groupName").value;
        console.log(name);
        if(name == ""){
            fail = 1;
            let errors = document.getElementById("errors");
            errors.style.display = "block";
            let error = document.getElementById("nameErr").style.display = "block";
        } else {
            for(let i = 0; i < name.length; i++){
                if(!(/[a-zA-Z]/).test(name[i])){
                    if(isNaN(name[i])){
                        if(!name[i] !== "$"){
                            if(name[i] !== "!"){
                                let errors = document.getElementById("errors");
                                errors.style.display = "block";
                                let error = document.getElementById("nameErr").style.display = "block";
                                fail = 1;
                                break;
                            }
                        }
                    }
                }
            }
        }
        
        

        let chkBtnList = document.getElementsByClassName("fld-chck");
        
        let fieldCounter = 0;
        // At Least one Checkbox Validation
        for(let i = 0; i < chkBtnList.length; i++){
            if(chkBtnList[i].checked){
                fieldCounter++;
            }
        }
        
        if(fieldCounter < 1){
            let errors = document.getElementById("errors");
            errors.style.display = "block";
            document.getElementById("checkErr").style.display = "block";
            fail = 1
            
        }

        let manifest = document.getElementById("manifest").value;
        // console.log(manifest);
        let dotIndx = manifest.indexOf(".");
        if(dotIndx < 0){
            let errors = document.getElementById("errors");
            errors.style.display = "block";
            document.getElementById("textErr").style.display = "block";
            fail = 1;
        }

        if(fail){
            return false;
        }
    }

    

    document.getElementById("groupName").onfocus = () => {
        let errors = document.getElementById("errors");
        errors.style.display = "none";
        let error = document.getElementsByClassName("error");
        for(let i = 0; i < error.length; i++){
            error[i].style.display = "none";
        }
    }

    document.getElementById("manifest").onfocus = () => {
        let errors = document.getElementById("errors");
        errors.style.display = "none";
        let error = document.getElementsByClassName("error");
        for(let i = 0; i < error.length; i++){
            error[i].style.display = "none";
        }
    }
}



