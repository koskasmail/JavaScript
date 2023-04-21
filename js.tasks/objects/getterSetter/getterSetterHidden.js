const AgeObject = (() => {
    let _age = 0;
  
    return {
      get age() {
        return _age;
      },
  
      set age(value) {
        _age = value;
      }
    };
  })();
  
  console.log(AgeObject.age); // 'default'
  
  AgeObject.age = 33;
  
  console.log(AgeObject.age); // 'new value'
  