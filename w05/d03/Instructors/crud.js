var artemis_contacts = [
  {name: "Andrew", email: "fritzy@generalassemb"},
  {name: "Sung", email: "sung.choi@generalassemb.ly"},
  {name: "Anna", email: "anna.ranking@generalassemb.ly"}
];

var commandLineInput = process.argv;
var command = commandLineInput[2];

var create = function create(name, email) {
  var newObj = {name: name, email: email};
  artemis_contacts.push(newObj)
  console.log(artemis_contacts);
};

var read = function read(index){
  console.log(artemis_contacts[index])
};

var update = function update(index, name, email) {
  artemis_contacts[index].name = name;
  artemis_contacts[index].email = email;
  console.log(artemis_contacts[index]);
};

var deleteContact = function deleteContact (index) {
  artemis_contacts.splice(index, 1);
  console.log(artemis_contacts);
};


if (command === "create") {
  create(commandLineInput[3], commandLineInput[4]);
} else if ( command === "read") {
  read(commandLineInput[3])
} else if (command === "update") {
  update(commandLineInput[3], commandLineInput[4], commandLineInput[5]);
} else if (command === "delete") {
  deleteContact(commandLineInput[3]);
} else {
  console.log("WAT You must enter create, read, update or delete, silly.")
}





