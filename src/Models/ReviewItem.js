class ReviewItem {
    classID = '';
    userID = '';
    rating = NaN;
    comment = '';

    constructor(courseID, userID, rating, comment) {
        this.classID = courseID;
        this.userID = userID;
        this.rating = rating;
        this.comment = comment;
    }
}

export default ReviewItem