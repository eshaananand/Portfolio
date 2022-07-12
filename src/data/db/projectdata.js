import todo from "../images/todo-new.jpg";
import scribd from "../images/scribd-new-2.jpg";
import mapathon from "../images/map-1.png";
import techcolumn from "../images/tech-columns.png";
const projectdata = [
    {
        image: todo,
        alttext: "todolist",
        title: "Todo List Web Application",
        content: "It's a to-do list web app made using backend services and hosted on Heroku, connected with MongoDB server running on an AWS cluster.",
        github: "#",
        web: "https://tranquil-anchorage-52445.herokuapp.com/"
    },
    {
        image: scribd,
        alttext: "scribd",
        title: "Scribd Website Clone",
        content: "It's a clone of the official site of Scribd using ReactJS forming components. Currently its under development phase and would be completed soon!",
        github: "https://github.com/ac-ayan/scribd",
        web: "https://ayan-chakraborty.me/scribd/"
    },
    {
        image: mapathon,
        alttext: "mapathon",
        title: "Health Care Indicators Map",
        content: "Created district level map using QJIS , a free and Open Source Geographic Information System and bragged \" Notable Mention \" by coming in Top 500 nationwide.",
        github: "https://github.com/ac-ayan/iitb-isro-aicte-mapathon",
        web: "https://iitb-isro-aicte-mapathon.fossee.in/"
    },
    {
        image: techcolumn,
        alttext: "techcolumn",
        title: "Tech Columns",
        content: "It’s a web app, which provides a platform, where the experiences of seniors and their suggestions about their domain are put in form of blogs to help other students.",
        github: "#",
        web: "https://tech-columns.netlify.app/"
    }
];
export default projectdata;