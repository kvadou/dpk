import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'kvadou',
	title: 'Hi I\'m Doug',
	subTitle: emoji,
	role: "Software Developer, Recruiter",
	resumeLink: "https://docs.google.com/document/d/1w1vD7_dsPfI6Yv5xqedc6U9l4X5-XDcQs_FbdALpnew/edit?usp=sharing",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/kvadou',
	linkedin: 'https://www.linkedin.com/in/dougkvamme/',
	email: 'dougkvamme@gmail.com',
	facebook: 'https://www.facebook.com/DPKlol/',
	twitter: 'https://twitter.com/DougKvamme',
	instagram: "https://www.instagram.com/dpkalltheway/",
	medium: '',
	stackoverflow: ''
};

export const skills = {
	title: emoji("Technical Skills"),
	subTitle: "",
	describeSkills: [
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 90},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 80},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 70},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 70},
		{fontAwesome: "fab fa-node-js", text: "Node", proficiency: 70},
	],
	view: true
};

export const experience = {
	title: "Work Experience",
	lists: [
		{
			date: "2022 - present",
			company: "Meta",
			role: "Leadership Recruiter",
		},
		{
			date: "2021 - 2022",
			company: "Electric",
			role: "Senior Talent Acquisition Partner",
		},
		{
			date: "2017 - 2021",
			company: "Nerdery",
			role: "Recruiter",
		},
		{
			date: "2014 - 2017",
			company: "Robert Half Technology",
			role: "Recruiting Manager",
		},
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: false
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "",
	lists: [
		{
			title: "Project1",
			desc: "project description",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Certifications & Licenses 🏆"),
	subTitle: "",
	lists: [
		{
			img: require("./assets/cert.png"),
			alt: "UMN Certification",
			title: "Full Stack Web Development Certificate",
			url: "https://www.credly.com/badges/75fca183-71bb-46d9-8def-3f8b96236567?source=linked_in_profile",
			desc: "The earner understands the fundamentals of front-end and back-end coding for the web, from databases to deployment. The earner has explored technologies such as HTML5, CSS3, Javascript, Bootstrap, SQL, Git, and more."
		},
		{
			img: require("./assets/coursera_logo.jpeg"),
			alt: "Coursera Certificate",
			title: "Introduction to Front End Development",
			url: "https://www.coursera.org/account/accomplishments/certificate/GY9TG3EKN3J6",
			desc: "Learn how to code and build interactive web pages using HTML5, CSS and JavaScript. Create a responsive website using HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences. Learn to use React in relation to Javascript libraries and frameworks."
		},
		{
			img: require("./assets/linkedin.jpeg"),
			alt: "LinkedIn Certificate",
			title: "JavaScript Essential Training",
			url: "https://www.linkedin.com/learning/certificates/9bc274a0107035e13f8c5456606a811d28698ad3fc0077edffa8d79e8a693fce?accountId=2128073&u=2128073&success=true&authUUID=OohZ7U8nTBizwWxVeBuE0A%3D%3D",
			desc: "This course helps you build your understanding of JavaScript piece by piece, from core principles like variables, data types, conditionals, and functions through advanced topics including loops, and DOM scripting."
		},

	],
	view: true
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Your Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: false
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "734-353-9743",
	introduce: emoji("dougkvamme@gmail.com"),
	view: true
}
