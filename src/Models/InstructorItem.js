class InstructorItem{
    instructorID = '';
    firstName = '';
    lastName = '';
    email = '';
    phoneNumber = '';
    startDate = '';



    constructor(instructorID, firstName, lastName, email, phoneNumber, startDate) {
    this.instructorID = instructorID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.startDate = startDate
    }

}


export default InstructorItem