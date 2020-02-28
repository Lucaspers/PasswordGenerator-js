var password = "";

function generatePassword() {
    var length = document.getElementById("selLength").value
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?&@'*"
    
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    document.getElementById("text").value = password
}

function copyToClipboard() {
    var copyText = document.getElementById("text");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}