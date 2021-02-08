import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import "../src/component/mainStyles.scss"
import NavigationBar from "./component/navbar/Navbar";
import LeftSidebar from "./component/sidebars/leftSidebar";
import MainPage from './component/pages/main/mainPage';
import NewsPage from "./component/pages/news/newsPage";
import AboutPage from "./component/pages/about/aboutPage";
import AdminPage from "./component/pages/admin/adminPages";



function App() {
    return (
        <div className="container-fluid w-100 p-0 ">
        <HashRouter>
            <NavigationBar/>
                <div className="row w-100 m-0 ">
                    <LeftSidebar/>
                    <Switch>
                        <Route path={'/'} component={MainPage} exact = {true}/>
                        <Route path={'/news'} component={NewsPage}/>
                        <Route path={'/about'} component={AboutPage}/>
                        <Route path={'/contact'} component={null}/>
                        <Route path={'/world'} component={null}/>
                        <Route path={'/seminars'} component={null}/>
                        <Route path={'/admins'} component={AdminPage}/>
                    </Switch>
                </div>
        </HashRouter>
        </div>
    );
}

export default App;
