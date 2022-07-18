import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/primary-market"?: {};
  "/secondary-market"?: {};
  "/dashboard-user"?: {};
  "/primary-market/:id"?: {};
  "/secondary-market/:id"?: {};
  "/primary-market/newton"?: {};
  "/primary-market/alif"?: {};
  "/secondary-market/newton"?: {};
  "/secondary-market/alif"?: {};
  "/primary-market/:type/:id"?: {};
  "/secondary-market/:type/:id"?: {};
  "/nft-voting"?: {};
  "http://localhost:3000/swap"?: {};
  "http://localhost:3000/proposals"?: {};
  "/#"?: {};
  "/home2"?: {};
  //
  "/nft-detailt"?: {};
  "/page-collection"?: {};
  "/page-search"?: {};
  "/page-author"?: {};
  "/page-upload-item"?: {};
  "/home-header-2"?: {};
  "/connect-wallet"?: {};
  //
  "/account"?: {};
  //
  "/blog"?: {};
  "/blog-single"?: {};

  "/about"?: {};
  "/contact"?: {};
  "/login"?: {};
  "/signup"?: {};
  "/forgot-pass"?: {};
  "/page404"?: {};
  "/subscription"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
