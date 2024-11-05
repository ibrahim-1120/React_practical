function generateCaptcha(length) {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

    let captcha = "";
    while (captcha.length < length) {
        let randomIndex = Math.trunc(Math.random() * 62);
        captcha += str[randomIndex];
    }
    return captcha;
}

let captcha = generateCaptcha(10);
console.log("-----------  captcha----------->", captcha)
let captcha1 = generateCaptcha(3);
console.log("-----------  captcha1----------->", captcha1)