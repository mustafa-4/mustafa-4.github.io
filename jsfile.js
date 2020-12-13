var submit = document.getElementById("submit");
var subject = document.getElementById("subject");
var ID = document.getElementById("ID");
var url = document.getElementById("URL");
var Email = document.getElementById("Email");
var Message = document.getElementById("Message");

submit.addEventListener("click", function(event){
    event.preventDefault();
    var fields = check_inputs();
    var isValid = false

    if(fields)
    {
        isValid = valid_input();
    }

    if(isValid)
    {
        sub_string();
    }
    
});

function check_inputs()
{
    var output = "You must fill the missing field(s):\n";
    var flag = 0;

    if(subject.value.length < 0 || subject.value == "")
    {
        output += "- Subject\n";
        flag++;
    }

    if(Email.value.length < 0 || Email.value == "")
    {
        output += "- Email\n";
        flag++;
    }

    if(ID.value.length < 0 || ID.value == "")
    {
        output += "- ID\n";
        flag++;
    }

    if(url.value.length < 0 || url.value == "")
    {
        output += "- URL\n";
        flag++;
    }

    if(Message.value.length < 0 || Message.value == "")
    {
        output += "- Message\n";
        flag++;
    }

    if(flag > 0)
    {
        alert(output);
        return false;
    }
    
    return true;    
    
}


function valid_input()
{
    var output = "";
    var flag = 0;

    if(subject.value.length != "" && !isNaN(parseFloat(subject.value)))
    {
        output += "Subject should contain text.\n";
        flag++;
    }   
    
    if(ID.value.length != "" && isNaN(parseFloat(ID.value)))
    {
        output += "ID should contain number only.\n";
        flag++;
    }   

    if(Message.value.length != "" && !isNaN(parseFloat(Message.value)))
    {
        output += "Message should contain text.\n";
        flag++;
    }

    if(flag > 0)
    {
        alert(output);
        return false;
    }
    
    return true;       
}

function sub_string()
{
    var domain = Email.value.substring(Email.value.lastIndexOf("@") +1);
    var username = url.value.substring(0, url.value.indexOf("."));
    alert("Domain Name: " + domain +"\nUsername: " + username);
}