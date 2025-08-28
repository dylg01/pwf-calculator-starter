(function (global) {
function toJson(obj){ return JSON.stringify(obj); }
function fromJson(str){ return JSON.parse(str); }
function b64urlEncode(str){
return btoa(unescape(encodeURIComponent(str)))
.replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
}
function b64urlDecode(str){
str = str.replace(/-/g,'+').replace(/_/g,'/');
while (str.length % 4) str += '=';
return decodeURIComponent(escape(atob(str)));
}


// Prefer LZString if present; otherwise fall back to Base64URL.
global.encodeForUrl = function (data) {
try {
if (global.LZString && global.LZString.compressToEncodedURIComponent) {
return 'z' + global.LZString.compressToEncodedURIComponent(toJson(data));
}
} catch (e) {}
return 'b' + b64urlEncode(toJson(data));
};


global.decodeFromUrl = function (q) {
if (!q) return null;
try {
if (q[0] === 'z' && global.LZString && global.LZString.decompressFromEncodedURIComponent) {
const s = global.LZString.decompressFromEncodedURIComponent(q.slice(1));
return fromJson(s);
}
if (q[0] === 'b') {
const s = b64urlDecode(q.slice(1));
return fromJson(s);
}
} catch (e) {}
// Last‑chance attempts
try { return fromJson(b64urlDecode(q)); } catch (e) {}
try { return fromJson(q); } catch (e) {}
return null;
};
})(window);