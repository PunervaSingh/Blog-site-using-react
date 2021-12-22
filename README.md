# Splog
### Splog is a fully authenticated, dynamically updating blogging website to create, update and delete posts for sharing thoughts and experiences.

### 📌 Table of Contents
* [Toolchain](#toolchain)
* [Features](#features)
* [Application Overview](#overview)
* [Challenges faced](#challenges)
* [Future Scope/ What's next?](#scope)
* [Resources](#resources)
* [Setup](#setup)
* [Bug Reporting](#bug)
* [Feature Requests](#feature-request)


<a id="toolchain"></a>
## 💻 Toolchain

<img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/><img alt="Express" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/><img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/><img alt="NodeJS" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/><img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/><img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"/>

***Frontend*** : React(.js)

***Server side*** : Express(.js), Node(.js)

***Database*** : MongoDB

***Other*** : Git - Version Control, Visual Studio Code


<a id="features"></a>
## 🚀 Features
- The user is required to register with the system, in order to access the features of the web application.
- All blogs are displayed on the landing page. Each blog can be viewed by clicking on blog's title.
- Any user can read a blog post but only the user who created the post can edit/ delete the post.
- Blogs can be searched on the basis of categories.
- Users can contact admin through contact page.
- Users are provided the feature of updating account information from profile page.
- [Add more features](#feature-request)...

<a id="overview"></a>
## 📖 Application Overview
### Home Page
![Website Image](img/home.png?raw=true "Title")
### Single Blog
![Website Image](img/single.png?raw=true "Title")
### About Page 
![Website Image](img/about.png?raw=true "Title")
### Contact Page 
![Website Image](img/contact.png?raw=true "Title")
### Write Page 
![Website Image](img/write.png?raw=true "Title")
### Register Page 
![Website Image](img/register.png?raw=true "Title")
### Login Page
![Website Image](img/login.png?raw=true "Title")
### Profile Page 
![Website Image](img/profile.png?raw=true "Title")
### Update profile Page 
![Website Image](img/update.png?raw=true "Title")
### Database
![Website Image](img/db.png?raw=true "Title")

<a id="challenges"></a>
## 💡 Challenges faced
- Faced problem while implementing create, read, update and delete operations.
- Encountered difficulty while using hooks for the first time in react.
- Using multi-cloud database service of MongoDB Atlas.

<a id="scope"></a>
## 🚧 Future Scope/ What's next?

- [ ] Implement follow feature for users on the profie page.
- [ ] Incorporate feature of liking blog post.
- [ ] Provide additional authentication features such as forgot password and other login options.
- [ ] Integrate trending blogs section in the sidebar.
- [ ] Provide latest and trending blogs on the email of subscribed users.

<a id="resources"></a>
## 📚 Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/getting-started/)


<a id="setup"></a>
## ⚙️ Set Up

Take These Steps to configure the Project(make sure npm and nodemon are already installed on your computer):

* Clone The Repository
```
git clone https://github.com/PunervaSingh/Blog-site-using-react
```

* Create an account on mongodb atlas and provide api key in .env file present in api folder.

* After integrating database properly, open terminal and give following command
```
cd api
nodemon index.js
```

* Open new terminal or split the current one and pass following command
```
cd client
npm start
```

* App will automatically open locally on your web browser.

<a id="bug"></a>
## 🐛 Bug Reporting
Feel free to [open an issue](https://github.com/PunervaSingh/Blog-site-using-react/issues) on GitHub if you find bugs.

<a id="feature-request"></a>
## ⭐ Feature Request
- Feel free to [open an issue](https://github.com/PunervaSingh/Blog-site-using-react/issues) on GitHub to add any additional features you feel could enhance this project.  
