let jwt =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ";

let jwtData = jwt.split(".")[1];
let decodedJwtJsonData = window.atob(jwtData);
let decodedJwtData = JSON.parse(decodedJwtJsonData);

let isAdmin = decodedJwtData.admin;

console.log("jwtData: " + jwtData);
console.log("decodedJwtJsonData: " + decodedJwtJsonData);
console.log("decodedJwtData: " + decodedJwtData);
console.log("Is admin: " + isAdmin);
