let extractedInput;

export function inputExtracter(input) {
    extractedInput = input;          // get the Field input
}

export function inputProvider() { 
   return extractedInput;         // gives to Info page
}