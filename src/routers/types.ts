import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/primary-market"?: {};
  "/secondary-market"?: {};
  "/primary-market/:id"?: {};
  "/secondary-market/:id"?: {};
  "/nft-voting"?: {};
  "http://localhost:3001/swap"?: {};
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
