import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  // const DrawerHeader = styled("div")(({ theme }) => ({
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "flex-end",
  //   padding: theme.spacing(0, 1),
  //   // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  // }));

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [currentToggleIndex, setCurrentToggleIndex] = useState(null);
  const submenuOpen = {
    display: "block",
  };

  const submenuClosed = {
    display: "none",
  };

  const handleSubMenuToggle = (index) => {
    console.log(index);
    setCurrentToggleIndex(index);
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <>
      <Divider />
      <List>
        {[{ menuLabel: "Dashboard", menuLink: "dashboard" }].map((item, index) => (
          <Link style={{ textDecoration: "none", color: '#595656' }} to={`/${item.menuLink}`} key={index}>
            <ListItem button key={index}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>

              <ListItemText primary={item.menuLabel} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {[
          {
            menuLabel: "Page 1",
            menuLink: "page-1",
            subMenu: [
              { subMenuLabel: "Submenu 1", subMenuLink: "page-1/subpage1" },
            ],
          },
          {
            menuLabel: "Page 2",
            menuLink: "page-2",
            subMenu: [
              { subMenuLabel: "Submenu 2", subMenuLink: "page-2/subpage2" },
            ],
          },
          { menuLabel: "Add Blog", menuLink: "add-blog" },
        ].map((item, mainMenuindex) => (
          <Link
            style={{ textDecoration: "none", color: '#595656' }}
            to={item.menuLink}
            key={mainMenuindex}
          >
            <ListItem
              onClick={() => {
                return handleSubMenuToggle(mainMenuindex);
              }}
              button
            >
              <ListItemIcon>
                {mainMenuindex % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.menuLabel} />

              {/* {item.menuLabel} */}
              {/* {item.subMenu && isSubmenuOpen ? <span><ArrowDropUpIcon /></span> : <span><ArrowDropDownIcon /></span>} */}
              {item.subMenu && (
                <span>
                  {item.subMenu && isSubmenuOpen ? (
                    <span>
                      <ArrowDropUpIcon />
                    </span>
                  ) : (
                    <span>
                      <ArrowDropDownIcon />
                    </span>
                  )}
                </span>
              )}
            </ListItem>
            <div>
              {item.subMenu &&
                item.subMenu.map((item, index) => {
                  return (
                    <div
                      style={
                        isSubmenuOpen === true &&
                          currentToggleIndex === mainMenuindex
                          ? submenuOpen
                          : submenuClosed
                      }
                      key={index}
                    >
                      <Link style={{
                        textDecoration: 'none',
                        padding: '10px 30px 10px 60px',
                        backgroundColor: '#F0F4F7',
                        width: '100%',
                        display: 'inline-block',
                        color: '#595656',
                        fontSize: '15px',


                      }} to={`${item.subMenuLink}`}>
                        <span style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-around'
                        }}>
                          <span>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</span>
                          <span>{item.subMenuLabel}</span>
                        </span>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </Link>
        ))}
      </List>
    </>
  );
};

export default LeftSidebar;
