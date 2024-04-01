// Setup top menu
const findActiveMenu = (subMenu, location) => {
  let match = false;
  subMenu.forEach((item) => {
    if (
      ((location.forceActiveMenu !== undefined &&
        item.pathname === location.forceActiveMenu) ||
        (location.forceActiveMenu === undefined &&
          item.pathname === location.pathname)) &&
      !item.ignore
    ) {
      match = true;
    } else if (!match && item.subMenu) {
      match = findActiveMenu(item.subMenu, location);
    }
  });
  return match;
};

const nestedMenu = (menu, location) => {
  const formattedMenu = [];
  menu.forEach((item) => {
    const menuItem = {
      icon: item.icon,
      title: item.title,
      pathname: item.pathname,
      subMenu: item.subMenu,
      ignore: item.ignore,
    };
    menuItem.active =
      ((location.forceActiveMenu !== undefined &&
        menuItem.pathname === location.forceActiveMenu) ||
        (location.forceActiveMenu === undefined &&
          menuItem.pathname === location.pathname) ||
        (menuItem.subMenu && findActiveMenu(menuItem.subMenu, location))) &&
      !menuItem.ignore;

    if (menuItem.subMenu) {
      menuItem.activeDropdown = findActiveMenu(menuItem.subMenu, location);

      // Nested menu
      menuItem.subMenu = nestedMenu(menuItem.subMenu, location);
    }

    formattedMenu.push(menuItem);
  });

  return formattedMenu;
};

const linkTo = (menu, navigate) => {
  if (menu.subMenu) {
    menu.activeDropdown = !menu.activeDropdown;
  } else {
    if (menu.pathname !== undefined) {
      navigate(menu.pathname);
    }
  }
};

export { nestedMenu, linkTo };
