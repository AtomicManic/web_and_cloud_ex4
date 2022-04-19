window.onload = () => {

    
    const submitBttn = document.getElementById("submit");
    let selectedHobbies = 0;

 
    submitBttn.onclick = () => {
        const chkBtnList = document.getElementsByClassName("chk-btn");
        let fail = 0;
        console.log(chkBtnList);
        // At Least Two Checkbox Validation
        for(let i = 0; i < chkBtnList.length; i++){
            if(chkBtnList[i].checked){
                selectedHobbies++;
            }
        }
        
        if(selectedHobbies < 2){
            document.getElementById("errors").style.display = "block";
            document.getElementById("checkErr").style.display = "block"
            fail = 1;
        }

        // Phone validation - 9-10 digits
        const phoneInpt = document.getElementById("phone").value;

        if(phoneInpt.length < 9 || phoneInpt.length > 10){
            document.getElementById("errors").style.display = "block";
            document.getElementById("phoneErr").style.display = "block";
            fail = 1;;
        }
        for(let i = 0; i < phoneInpt.length; i++){
            if (phoneInpt[i] < 0 || phoneInpt[i] > 9){
                document.getElementById("errors").style.display = "block";
                document.getElementById("phoneErr").style.display = "block";
                
                fail = 1;
            }
        }

        // Full name validation - at least one space
        const fullName = document.getElementById("fullName").value;
        let spaceCounter = 0;
        if(fullName.length < 3){
            document.getElementById("errors").style.display = "block";
            document.getElementById("nameErr").style.display = "block";
            fail = 1;
        }
        for(let i = 0; i < fullName.length; i++){
            if(!(/[a-zA-Z]/).test(fullName[i])){
                if(fullName[i] == " "){
                    if(i < 3){
                        document.getElementById("errors").style.display = "block";
                        document.getElementById("nameErr").style.display = "block";
                        fail = 1;
                    } else {
                        spaceCounter++;
                    }
                }
            }
            
        }

        if(spaceCounter < 1){
            document.getElementById("errors").style.display = "block";
            document.getElementById("nameErr").style.display = "block";
            fail = 1;
        }

        if(fail){
            return false;
        }
    }
    
    let inputs = document.getElementsByTagName("input");
    console.log(inputs);
    for(let i = 0; i < inputs.length; i++){
        inputs[i].onfocus = () => {
            document.getElementById("errors").style.display = "none";
            let errors = document.getElementsByClassName("error");
            for(let i = 0; i < errors.length; i++){
                errors[i].style.display = "none";
            }
        }
    }

    
}