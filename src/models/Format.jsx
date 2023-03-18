export const cekLastCharUrl = (url) => {
    let char = '';
    if ((url.substr(url.length - 3)) === 'get') {
      char = '?';
    } else if (((url.substr(url.length - 1)) !== '?') || ((url.substr(url.length - 3)) !== 'get')) {
      char = '&';
    }
    return char;
  };

  export const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  export const removeExtraSpace = (data) => {
    return data.trim().split(/ +/).join(' ');
  };

  export const getAllMenuLink = (menus, m) => {
    menus.forEach(menu => {
      m.set(menu.menu_code, menu.url);
      if (menu.sub_menu) {
        m = getAllMenuLink(menu.sub_menu, m);
      }
    });
    return m;
  };