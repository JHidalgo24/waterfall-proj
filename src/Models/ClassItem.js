class ClassItem{

    classID = '';

    //general info
    instructor = '';
    description = '';
    className = '';
    startDate = '';
    endDate = '';
    cost = 395;

    //more info
    startTime = '';
    endTime = '';
    maxSize = 25;
    actual = 19;
    address = '';


    constructor(classID, className, startDate, endDate, startTime, endTime, cost, maxSize, address, instructor, description) {
        this.classID = classID;
        this.className = className;
        this.startDate = startDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.endDate = endDate;
        this.cost = cost;
        this.maxSize = maxSize;
        this.address = address;
        this.instructor = instructor
        this.description = description
    }
}

export default ClassItem