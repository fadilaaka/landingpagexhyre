import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "shared/Footer/Footer";
import PageHome from "containers/PageHome/PageHome";
import Page404 from "containers/Page404/Page404";
import AuthorPage from "containers/AuthorPage/AuthorPage";
import AccountPage from "containers/AccountPage/AccountPage";
import PageContact from "containers/PageContact/PageContact";
import PageAbout from "containers/PageAbout/PageAbout";
import PageSignUp from "containers/PageSignUp/PageSignUp";
import PageLogin from "containers/PageLogin/PageLogin";
import PageSubcription from "containers/PageSubcription/PageSubcription";
import BlogPage from "containers/BlogPage/BlogPage";
import BlogSingle from "containers/BlogPage/BlogSingle";
import SiteHeader from "containers/SiteHeader";
import NftDetailPage from "containers/NftDetailPage/NftDetailPage";
import PageCollection from "containers/PageCollection";
import PageSearch from "containers/PageSearch";
import PageUploadItem from "containers/PageUploadItem";
import PageConnectWallet from "containers/PageConnectWallet";
import PageHome2 from "containers/PageHome/PageHome2";
import LandingPage from "containers/LandingPage/LandingPage";
// import PrimaryMarket from "containers/PrimaryMarket/AlifPage";
// import SecondaryMarket from "containers/SecondaryMarket/AlifPage2";
import PageVoting from "containers/PageVoting";
import NftDetailPage2 from "containers/NftDetailPage/NftDetailPage2";
import NewtonPage from "containers/PrimaryMarket/NewtonPage";
import AlifPage from "containers/PrimaryMarket/AlifPage";
import NewtonPage2 from "containers/SecondaryMarket/NewtonPage2";
import AlifPage2 from "containers/SecondaryMarket/AlifPage2";
import DashboardUser from "containers/DashboardUser/DashboardUser";

export const pages: Page[] = [
  { path: "/", exact: true, component: LandingPage },
  // { path: "/primary-market", exact: true, component: PrimaryMarket },
  // { path: "/secondary-market", exact: true, component: SecondaryMarket },
  // { path: "/primary-market/:id", exact: true, component: NftDetailPage },
  // { path: "/secondary-market/:id", exact: true, component: NftDetailPage2 },
  { path: "/dashboard-user", exact: true, component: DashboardUser },
  { path: "/primary-market/newton", exact: true, component: NewtonPage },
  { path: "/primary-market/alif", exact: true, component: AlifPage },
  { path: "/secondary-market/newton", exact: true, component: NewtonPage2 },
  { path: "/secondary-market/alif", exact: true, component: AlifPage2 },
  { path: "/primary-market/:type/:id", exact: true, component: NftDetailPage },
  {
    path: "/secondary-market/:type/:id",
    exact: true,
    component: NftDetailPage2,
  },
  { path: "/nft-voting", exact: true, component: PageVoting },
  // { path: "/", exact: true, component: PageHome2 },
  { path: "/#", exact: true, component: PageHome2 },
  { path: "/home2", exact: true, component: PageHome },
  //
  { path: "/home-header-2", exact: true, component: PageHome },
  // { path: "/nft-detailt/:id", exact: true, component: NftDetailPage },
  // { path: "/nft-detailt", component: NftDetailPage },
  { path: "/page-collection", component: PageCollection },
  { path: "/page-search", component: PageSearch },
  { path: "/page-author", component: AuthorPage },
  { path: "/account", component: AccountPage },
  { path: "/page-upload-item", component: PageUploadItem },
  { path: "/connect-wallet", component: PageConnectWallet },
  //
  { path: "/blog", component: BlogPage },
  { path: "/blog-single", component: BlogSingle },
  //
  { path: "/contact", component: PageContact },
  { path: "/about", component: PageAbout },
  { path: "/signup", component: PageSignUp },
  { path: "/login", component: PageLogin },
  { path: "/subscription", component: PageSubcription },
];

const Routes = () => {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <SiteHeader />
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route
              key={path}
              component={component}
              exact={!!exact}
              path={path}
            />
          );
        })}
        <Route component={Page404} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Routes;
