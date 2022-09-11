# CK Learning Training

### Waterfall Project

> This project was made, so we could all practice working on the waterfall methodology.
> We all got into groups and learned how to time manage and how to be a successful team
> when it came to working together. This is a mock page that was made with requirements
> that had us working as consultants.

## Account Page

***
https://ck-learning-thing.netlify.app/#/account

The account page shows you basic information on yourself.
There is currently no option for the user to change how his account looks or his information.
The only way for this information to be changed would be by an Admin or an Instructor.

Some basic features include your profile image, log-out button, your name, the amount of classes taken and
if you have any classes that you have to pay still.

This page also features two different looks. There is either a sign-up option or an account loaded option depending on
if the user is signed in already.
***

## Register Page

***
https://ck-learning-thing.netlify.app/#/register

The Register page is a basic way for a user to sign up. The instructors and the Admins are not able to sign up this way
they have to be manually entered by CK or an Admin depending on the position that they are coming in for. Users are able
to use Google or just a basic email and password login. This part of the website is more inclined for the User rather
than an employee at CKTeaching

***

## Classes Page

***
https://ck-learning-thing.netlify.app/#/classes

The classes page shows users the collection of classes coming in from the DB. It has an arrow expand key to show more
information on the class, and an Add Cart button, so they can check out the class. There is however a limit to how many
times you can add the class and that limit is 1 since they can only purchase a ticket for themselves.

There is a cart button at the bottom right that becomes enabled only when they add a class to their cart.

When this cart is open there is a dialog that shows the Classes in their cart and also shows them three payment methods.

The three payment methods are:

- Paypal
- Card (Debit or Credit)
- Cash, Check, Purchase Order

For the Cash Check, and PO. They will need to bring it into the office where you will manually add them to the class. If
there is no payment within 7 days of them putting in the order or them calling to cancel it then they get a "Strike"
which marks their account as Non-Payment. After 3 of these, their account gets locked, and they can't purchase any more
classes.
***

## Schedule Page

***
https://ck-learning-thing.netlify.app/#/user-courses

The schedule is a basic calendar and list page. This shows them the classes they are taking and on a calendar and what
day they are. There is no option other than viewing because they can't drop a course. There is no refunds so they can
only see. They can either show up or not, no money will be refunded.
***

## Review Page

***
https://ck-learning-thing.netlify.app/#/review-courses

The Review Page shows the users classes that they have paid for and past the date of the event. They can leave a review
on that page to say whether they loved it or hated it. They can also look at more information on the class to remember
with the arrow expands.
They are also given the option to leave a comment and the right side will show comments left by previous people which
gets pulled down from the database.
***

## Instructor, Admin, CEO Pages

***
https://ck-learning-thing.netlify.app/#/CEO

The Instructor, Admin, and CEO Page are all the same with different levels of access depending on their account. The CEO
can view Users, Instructors, Courses, and Admins. They are also able to Fire and modify users and other admins. The CEO
can also modify courses and users and delete them.

The Admin Page can do everything the CEO Page can with some exceptions. The admin can fire instructors but not other
admins. This is the only functionality that they lose.

The Instructors have the same functionality as Admin except they can not fire Admins or other instructors or modify
them. They can
only Modify or change other Users and courses


***

## Money Breakdown Page

***
The money breakdown page gathers data from the database and shows you how many losers we have gained how many we have
lost and the income of that month. There is also a table showing what classes were used the most and how many times they
have been taken in total. This will help CK learn which classes to add based on how many people have taken it.


***

### Prerequisites

```
- You will need any editor of choice.
    - Webstorm, IntelliJ, or VSCode will do the job
```

### Project Setup

```
1. First install dependencies
    - npm install
2. For compiling and hot-reloads use:
    - npm run serve
3. Minifying for production
    - npm run build 
4. Lints and fixing files run:
    - npm run lin
```

### Contact

```
1. Web-Developer
    - jhidalgo2@my.wctc.edu
2. Web-Developer
    - dsolanoreyes@my.wctc.edu
3. Web-Developer
    - ajakus@my.wctc.edu
4. Database-Speaclist
    -ascherf2@my.wctc.edu
```