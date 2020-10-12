let message = "what the fuck man";
let subject = null;

let mail =
  (subject ?? "Type a subject ...") + "\n" + (message ?? "Message Title");

console.log(mail);
