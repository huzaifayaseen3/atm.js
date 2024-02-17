let password=prompt("Enter password:")
const balance=5000;

if(password=="12345")
{
    let number=prompt("Welcome Huzaifa Yaseen : 1.deposit 2.withdraw 3.checkbalance 4.exit,choose one: ")
    switch(number){
        case "1":
            let deposit=(prompt("Enter amount you want to deposit:"))
            num = balance + deposit;
            alert("New Balance is: "+num)
            break;
            
            case "2":
                let withdraw=prompt("Your current balance is 5000. Enter amount  you want to withdraw:")
                num1 = balance - withdraw;
                alert("Current balance after withdrawal is :" +num1)
                break;
                
                case "3":
                    alert("Your check balance is "+balance)
                    break;
                    
                    case "4":
                        alert(" ")
                        break;
                        
                        default:
                        alert("invalid");
                        break;
            
            
    }
}
else{
    alert("Wrong password!")
}