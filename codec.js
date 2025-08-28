// codec.js — tiny URL-safe Base64 encoder/decoder for JSON strings
(function(){
  function toUrlSafe(b64){ return b64.replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,''); }
  function fromUrlSafe(s){ s=s.replace(/-/g,'+').replace(/_/g,'/'); return s + '==='.slice((4 - s.length % 4) % 4); }
  function encode(str){
    const bytes = new TextEncoder().encode(str);
    let bin=''; for(let i=0;i<bytes.length;i++) bin += String.fromCharCode(bytes[i]);
    return toUrlSafe(btoa(bin));
  }
  function decode(s){
    const b64 = fromUrlSafe(s);
    const bin = atob(b64);
    const len = bin.length, bytes = new Uint8Array(len);
    for(let i=0;i<len;i++) bytes[i]=bin.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }
  window.Codec = { encode, decode };
})();
