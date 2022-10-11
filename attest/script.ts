public lastName: string = '';

  public firsName: string = '';

  public birthday: string = '';

  public age: number = 0;


  public calculateAge() {
    let year = '';
    let currentDate = '';
    if(this.birthday){
      year = moment(this.birthday).year().toString();
      currentDate = moment().year().toString();
      this.age = +currentDate - +year;
    }
  }