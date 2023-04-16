

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",

    set lang(lang) {
      this.language = lang;
    },

    get lang() {
        return this.language;
    }

  };
  
  // Set an object property using a setter:
  person.lang = "english";
  
  console.log(`person.lang::: ${person.lang}`); //?
  console.log(`person.language::: ${person.language}`); //?
  console.log(`person:::`); //?
  console.log(person);
