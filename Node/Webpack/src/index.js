import "./CSS/index.css";
import "./Less/index-less.less";
console.log("Hello Webpack");
if (process.env.NODE_ENV === "production") {
    console.log("production");
}
if (process.env.NODE_ENV === "development") {
    console.log("development");
}