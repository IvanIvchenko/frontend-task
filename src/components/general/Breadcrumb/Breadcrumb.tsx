import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import { capitalizeFirstLetter } from "utils/helpers/stringHelpers";
import { SBreadCrumbWrapper } from "./Breadcrumb.style";

export const NavigationBar: React.FC = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const links = pathSnippets.map(
    (_, index) => `/${pathSnippets.slice(0, index + 1).join("/")}`
  );
  const breadcrumbItems = links.map((link, index) => ({
    title: <Link to={link}>{capitalizeFirstLetter(pathSnippets[index])}</Link>,
    key: link,
  }));

  return (
    <SBreadCrumbWrapper>
      <Breadcrumb items={breadcrumbItems} separator=">" />
    </SBreadCrumbWrapper>
  );
};
