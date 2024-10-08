# About the project
As someone who has lived with migraines and chronic headaches their entire life, I wanted to build something that could help other people dealing with these issues. Headaches are extremely varied in type and difficult to pinpoint, so often times this leaves people frustrated and confused about the pain they are experiencing. My goal with this app is that it helps people better understand their headaches so they can get the proper care they deserve.

![splashPage](https://user-images.githubusercontent.com/106822556/197843479-a0ce536e-5c93-4f23-8086-86df48ab3f80.gif)

## How it's made
This is a full-stack application built with MVC architecture and local authentication.
* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![EJS][EJS]][EJS-url]
* [![MongoDB][MongoDB]][MongoDB-url]

## Features
* Login with an email account to view your home page with a personalised greeting
* Record an attack that walks you through a detailed list of questions about your headache and receive a summary page of all info when complete
* Quick-add a headache to track on the home page
* Search for headaches from a specific date
* Mark tracked headaches important by selecting the exclamation point symbol, or deselect it to mark unimportant
* Delete tracked headaches by selecting the trash can symbol
* Rearrange tracked headaches with drag and drop functionality

## App in action
Tracking headaches on the home page

![homePage](https://user-images.githubusercontent.com/106822556/197908836-a2903917-7791-41e9-a834-3425a151f683.gif)

Recording an attack

![recordAttack](https://user-images.githubusercontent.com/106822556/197914014-f9634cf1-1957-4950-8010-8706815cc6d3.gif)

## Packages / dependencies
bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator, tailwindcss + daisyui

## Optimizations
As of right now, when recording a full attack, the headache doesn't show up on the home screen automatically, so you have to add it manually if you want to track it. I will add this feature soon! I also want to include an archive where users can pull up past records of thier attack summaries. 

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Node.js]: https://img.shields.io/badge/Node.js-233056?style=flat&logo=nodedotjs&logoColor=339933
[Node-url]: https://nodejs.org/en/
[Express.js]: https://img.shields.io/badge/Express-eeeeee?style=flat&logo=express&logoColor=000000
[Express-url]: https://expressjs.com
[MongoDB]: https://img.shields.io/badge/MongoDB-023430?style=flat&logo=mongodb&logoColor=00ed64
[MongoDB-url]: https://www.mongodb.com
[EJS]: https://img.shields.io/badge/-EJS-%238f3d3d?style=flat&logo=javascript&logoColor=ffffff
[EJS-url]: https://ejs.co
