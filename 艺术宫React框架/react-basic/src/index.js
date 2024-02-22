// 项目入口
// 项目核心包
import React from "react";
import ReactDOM from "react-dom/client";
// 导入项目的根组件
import App from "./App";

// 把app根组件,渲染到id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
