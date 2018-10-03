//535. Encode and Decode TinyURL

//https://leetcode.com/problems/encode-and-decode-tinyurl/description/

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

var idMap = {};
const codeChoice = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

var randomCode = function(n) {
    let code = "";
    
    for (let i=0; i<n; i++) {
        code += codeChoice[Math.floor(Math.random()*62)];
    }
    
    return code;
}

var encode = function(longUrl) {
    let code = randomCode(7);
    
    //if code is already in idMap but corresponds to another url
    while (idMap[code] && !idMap.values.includes(longUrl)) {
        code = randomCode(7);
    }
    
    //if code is unique and longUrl not in idMap
    idMap[code] = longUrl;
    
    return "http://tinyurl.com/" + code;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    //shortUrl = "http://tinyurl.com/-------"
    
    const splitArr = shortUrl.split('m/');
    const code = splitArr[1];
    
    return idMap[code];
    
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */


console.log(decode(encode("http://www.google.com")));
