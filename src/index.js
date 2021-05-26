const viewSection = document.querySelector(".view-section");
const contactsSection = document.querySelector(".contacts-section");

const state = {
  contacts: [],
  selectedContact: null
};

/* [START] NO NEED TO EDIT */

function getContacts() {
  fetch("http://localhost:3000/contacts")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      state.contacts = data;

      renderContactsList();
    });
}

function renderContactsList() {
  const listEl = document.createElement("ul");
  listEl.className = "contacts-list";

  for (let i = 0; i < state.contacts.length; i++) {
    const contact = state.contacts[i];
    const listItemEl = renderContactListItem(contact);

    listEl.append(listItemEl);
  }

  contactsSection.append(listEl);
}

function renderAddressSection(address) {
  const containerEl = document.createElement("section");

  const headingEl = document.createElement("h2");
  headingEl.innerText = "Address";

  containerEl.append(headingEl);

  const streetText = document.createElement("p");
  streetText.innerText = address.street;

  containerEl.append(streetText);

  const cityText = document.createElement("p");
  cityText.innerText = address.city;

  containerEl.append(cityText);

  const postCodeText = document.createElement("p");
  postCodeText.innerText = address.postCode;

  containerEl.append(postCodeText);

  return containerEl;
}

function renderContactView() {
  const contact = state.selectedContact;

  if (!contact) return;

  viewSection.innerHTML = "";

  const containerEl = document.createElement("article");
  containerEl.className = "center light-shadow address-card";

  const headingEl = document.createElement("h1");

  const fullName = `${contact.firstName} ${contact.lastName}`;
  headingEl.innerText = fullName;

  containerEl.append(headingEl);

  const addressSectionEl = renderAddressSection(contact.address);

  containerEl.append(addressSectionEl);

  viewSection.append(containerEl);
}

/* [END] NO NEED TO EDIT */

function renderContactListItem(contact) {
  const listItemEl = document.createElement("li");

  const headingEl = document.createElement("h3");

  const fullName = `${contact.firstName} ${contact.lastName}`;

  headingEl.innerText = fullName;

  listItemEl.append(headingEl);

  const viewBtn = document.createElement("button");
  viewBtn.className = "button grey";
  viewBtn.innerText = "View";

  viewBtn.addEventListener("click", function () {
    state.selectedContact = contact;

    renderContactView();
  });

  listItemEl.append(viewBtn);

  const editBtn = document.createElement("button");
  editBtn.className = "button blue";
  editBtn.innerText = "Edit";
  (
    editBtn.addEventListener("click", function () {
      // [TODO] Write Code
    });
  listItemEl.append(editBtn);

  return listItemEl;
}

function listenNewContactButton() {
  const btn = document.querySelector(".new-contact-btn");

  btn.addEventListener("click", function () {
    // [TODO] Write Code
  });
}

// [TODO] Write Code

//Create a new Form
function createNewContant() {
  const mainSection = document.querySelector("main")
  mainSection.innerHTML = ""
  // Create A NEW FORM
  const newContantForm = document.createElement("form")
  newContantForm.setAttribute("class", "form-stack light-shadow center contact-form")
  mainSection.append(newContantForm)
  //CREATE "Create Contact H1"
  const contactFormh1El = document.createElement("h1")
  contactFormh1El.innerText = "Edit Contact"
  newContantForm.append(contactFormh1El)

  // CREATE LABEL FOR FIRST NAME
  const labelfirstName = document.createElement("label")
  labelfirstName.setAttribute("for", "first-name-input")
  labelfirstName.innerText = "First Name"
  newContantForm.append(labelfirstName)

  // Input First Name
  const labelfirstNameinputEl = document.createElement("input")
  labelfirstNameinputEl.setAttribute("id", "first-name-input")
  labelfirstNameinputEl.setAttribute("name", "first-name-input")
  labelfirstNameinputEl.setAttribute("type", "text")
  labelfirstNameinputEl.setAttribute("required", "true")
  newContantForm.append(labelfirstNameinputEl)
  // Label for last Name
  const labelLastNameEl = document.createElement("label")
  labelLastNameEl.setAttribute("for", "last-name-input")
  labelLastNameEl.innerText = "Last Name:"
  newContantForm.append(labelLastNameEl)

  //Input for last Name
  const labelLastNameElinput = document.createElement("input")
  labelLastNameElinput.setAttribute("id", "last-name-input")
  labelLastNameElinput.setAttribute("name", "last-name-input")
  labelLastNameElinput.innerText = "Last Name:"
  newContantForm.append(labelLastNameElinput)

  //Create Label street
  const streetLabelInput = document.createElement("label")
  streetLabelInput.setAttribute("for", "street-input")
  streetLabelInput.innerText = "Street"
  newContantForm.append(streetLabelInput)
  //create Input in Street
  const streetinput = document.createElement("input")
  streetinput.setAttribute("id", "street-input")
  streetinput.setAttribute("name", "street-input")
  streetinput.setAttribute("type", "text")
  streetinput.setAttribute("required", "true")
  newContantForm.append(streetinput)

  // Create label for City
  const cityLabel = document.createElement("label")
  cityLabel.setAttribute("for", "city-input")
  cityLabel.innerText = "City:"
  newContantForm.append(cityLabel)

  // Create input for CITY
  const cityInput = document.createElement("input")
  cityInput.setAttribute("id", "city-input")
  cityInput.setAttribute("name", "city-input")
  cityInput.setAttribute("type", "text")
  cityInput.setAttribute("required", "true")
  newContantForm.append(cityInput)

  // Postcode label
  const postCodeLabel = document.createElement("label")
  postCodeLabel.setAttribute("for", "city-input")
  postCodeLabel.innerText = "PostCode:"
  newContantForm.append(postCodeLabel)
  // postCode input
  const postCodeInput = document.createElement("input")
  postCodeInput.setAttribute("id", "post-code-input")
  postCodeInput.setAttribute("name", "post-code-input")
  postCodeInput.setAttribute("type", "text")
  postCodeInput.setAttribute("required", "true")
  newContantForm.append(postCodeInput)

  // Check box section div
  const formCheckBox = document.createElement("div")
  formCheckBox.setAttribute("class", "checkbox-section")
  newContantForm.append(formCheckBox)

  // input check box
  const checkBoxInput = document.createElement("input")
  checkBoxInput.setAttribute("id", "block-checkbox")
  checkBoxInput.setAttribute("name", "block-checkbox")
  checkBoxInput.setAttribute("type", "checkbox")
  newContantForm.append(checkBoxInput)
  // label checkbox
  const labelCheckBox = document.createElement("label")
  labelCheckBox.setAttribute("for", "block-checkbox")
  labelCheckBox.innerText = "Block"
  newContantForm.append(labelCheckBox)

  // Action Section
  const actionSection = document.createElement("div")
  actionSection.setAttribute("class=", "actions-section")
  newContantForm.append(actionSection)

  // Submit button
  const buttonEl = document.createElement("button")
  buttonEl.setAttribute("class", "button blue")
  buttonEl.setAttribute("type", "submit")
  buttonEl.innerText = "Create"

  newContantForm.append(buttonEl)

  newContantForm.addEventListener("submit", function (event) {
    event.preventDefault()

  });

}

function createNewContant() {
  let newAddressid = 0
  let newContantForm = document.querySelector(".contact-form")
  let contact = {
    firstName: newContantForm['first-name-input'].value,
    lastName: newContantForm['last-name-input'].value,
    blockContant: newContantForm['block-checkbox'],
    addressid: newAddressid

  }
  let address = {
    street: newContantForm['street-input'].value,
    city: newContantForm['city-input'].value,
    postCode: newContantForm['post-code-input'].value

  }
}

function main() {
  listenNewContactButton();
  getContacts();

}


main();
