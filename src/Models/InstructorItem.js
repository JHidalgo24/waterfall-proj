class InstructorItem {
    instructorID = '';
    firstName = '';
    lastName = '';
    age = '';
    gender = '';
    email = '';
    phoneNumber = '';
    startDate = '';
    endDate = null;
    terminationCause = ''
    terminated = false;



    constructor(instructorID, firstName, lastName, email, phoneNumber, startDate) {
    this.instructorID = instructorID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.startDate = startDate
    }

    changeInstructor = (instructorChange) => {
        this.terminationCause = instructorChange.terminationCause
        this.firstName = instructorChange.firstName;
        this.lastName = instructorChange.lastName;
        this.age = instructorChange.age;
        this.gender = instructorChange.gender;
        this.email = instructorChange.email;
        this.phoneNumber = instructorChange.phoneNumber;
        this.startDate = instructorChange.startDate;
    }

    fireInstructor = () =>{

        let today = new Date();

        let hours = today.getHours();
        let minutes = today.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;

        this.endDate = (today.getMonth() + 1) + '-' + today.getDay() + '-' + today.getFullYear() + ' @ '+ strTime;

        this.terminated = true;
    }
}


export default InstructorItem