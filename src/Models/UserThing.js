
class User {
    userID = '';
    firstName = '';
    lastName = '';
    age = 0;
    gender = '';
    jobTitle = '';
    email = '';
    phoneNumber = '';
    companyName = '';

    constructor(userID, firstName, lastName, age, gender, jobTitle, email, phoneNumber, companyName){

        this.userID = userID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.jobTitle = jobTitle;
        this.email = email ;
        this.phoneNumber = phoneNumber;
        this.companyName = companyName;
    }




    changeUser = (userChange) => {
         this.firstName = userChange.firstName;
         this.lastName = userChange.lastName;
         this.age = userChange.age;
         this.gender = userChange.gender;
         this.jobTitle = userChange.jobTitle;
         this.email = userChange.email ;
         this.phoneNumber = userChange.phoneNumber;
         this.companyName = userChange.companyName;
    }
}

export default User