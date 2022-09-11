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
    users = [];


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


    changeCourse = (courseChange) => {

        this.className = courseChange.className;
        this.startDate = courseChange.startDate;
        this.startTime = courseChange.startTime;
        this.endTime = courseChange.endTime;
        this.endDate = courseChange.endDate;
        this.cost = courseChange.cost;
        this.maxSize =courseChange. maxSize;
        this.address = courseChange.address;
        this.instructor = courseChange.instructor
        this.description = courseChange.description
    }

    getReviews = () => {return this.reviews}

    addReview = (reviewObject) => {
        this.reviews.push(reviewObject)
    }
}

export default ClassItem