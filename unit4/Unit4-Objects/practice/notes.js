class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }

    stringGPA() {
        return this.gpa.toString();
    }

    get level() {
        if (this.credits > 90 ) {
            return 'Senior';
        } else if (this.credits > 60) {
            return 'Junior';
        } else if (this.credits > 30) {
            return 'Sophomore';
        } else {
            return 'Freshman';
        }
    }
  set major(major) {


    if ( this.level === 'Senior' || this.level === 'Junior') {
      this._major = major;
      return this._major;
    } else {
      this._major = 'none';
    return this._major;
    }

  }
}

var student = new Student(3.9, 60);

//Other Examples

class User {
    constructor(email, username, birthday) {
        this.email = email;
        this.username = username;
        this.birthday = birthday;
    }
  changeUsername(username){
    this.username = username;
  }
}

const user1 = new User('JavaScriptStudent@teamtreehouse.com', 'JSUser1', '1/08/1991');

user1.changeUsername('TreehouseStudent2');
