const person = {
    firstName: '---',
    lastName: '---',
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  
    set fullName(name) {
      const parts = name.split(' ');
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  };
  
  console.log(`Name::: ${person.fullName}`);
  
  person.fullName = "yaron kessler";
  
  console.log(person.fullName); 
  console.log(person.firstName); 
  console.log(person.lastName); 
  