# About the project
As someone who has lived with migraines and chronic headaches their entire life, I wanted to build something that could help other people dealing with these issues. Headaches are extremely varied in type and difficult to pinpoint, so often times this leaves people frustrated and confused about the pain they are experiencing. My goal with this app is that it helps people better understand their headaches so they can get the proper care they deserve.

Live link: https://clearheaded.fly.dev

![splashPage](https://user-images.githubusercontent.com/106822556/197843479-a0ce536e-5c93-4f23-8086-86df48ab3f80.gif)

## How it's made
This is a full-stack application built with MVC architecture and authentication.
* [![MongoDB][MongoDB]][MongoDB-url]
* [![Express][Express.js]][Express-url]
* [![EJS][EJS]][EJS-url]
* [![Node][Node.js]][Node-url]

## Features
* Users can login with their email account and view their home page with a personalised greeting
* Users can record an attack that walks them through a detailed list of questions about their headache and receive a summary page of all info when complete
* Users can "quick-add" a headache to track on the home page
* Users can search for headaches from a specific date
* Users can mark tracked headaches important by selecting the exclamation point symbol, or deselect it to mark it unimportant
* Users can delete tracked headaches by selecting the trash can symbol
* Users can rearrange tracked headaches with drag and drop functionality

## App in action
![homePage](https://user-images.githubusercontent.com/106822556/197908836-a2903917-7791-41e9-a834-3425a151f683.gif)
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
