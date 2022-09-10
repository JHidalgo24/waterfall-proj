class AdminItem {
    adminID = '';
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

    constructor(AdminID, firstName, lastName, age, gender, email, phoneNumber, startDate) {
        this.AdminID = AdminID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.startDate = startDate;

    }

    changeAdmin = (adminChange) => {
        this.terminationCause = adminChange.terminationCause
        this.firstName = adminChange.firstName;
        this.lastName = adminChange.lastName;
        this.age = adminChange.age;
        this.gender = adminChange.gender;
        this.email = adminChange.email;
        this.phoneNumber = adminChange.phoneNumber;
        this.startDate = adminChange.startDate;
    }

    fireAdmin = () =>{
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

export default AdminItem