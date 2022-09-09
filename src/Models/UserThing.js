class User
{
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
}

export default User