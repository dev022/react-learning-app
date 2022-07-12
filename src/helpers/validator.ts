export class CustomValidator{
    // Password validation
    public static passwordIsValid = async(password: string) => {
        if(password.length >= 8){
            const regexes = ["[A-Z]","[a-z]","[0-9]","[^a-zA-Z0-9]"];
            let matchCount = 0;
            // checking all password conditions: at least three of the four should be available character types:
            // lowercase letters | uppercase letters | numbers | symbols
            regexes.forEach((exp)=>{
                if (password.match(exp)) {
                    matchCount = matchCount + 1;
                };
            });
            if(matchCount >= 3){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}