function validEmail(email) {
    const invalidCharacters = "1234567890.+-_ @";
    

    if (invalidCharacters.includes(email[0]) || invalidCharacters.includes(email[email.length - 1])) {
        return false;
    }

    if (email.split("@").length !== 2 || email.split(".").length !== 2) {
        return false;
    }

    const domain = email.split(".")[1];
    if (domain !== "com") {
        return false;
    }
    
    return true;
}

const answer=validEmail("test@example.com")
console.log(answer);
