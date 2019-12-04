import "@reach/menu-button/styles.css";

import React from "react";
import { action } from "@storybook/addon-actions";
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";

export let name = "With Custom Position";

const OFFSET = 8;

const positionTop = (buttonRect, menuRect) => ({
  left: `${buttonRect.left + window.pageXOffset}px`,
  top: `${buttonRect.top - menuRect.height + window.pageYOffset - OFFSET}px`
});

export let Example = () => (
  <Menu>
    <MenuButton id="example-button" style={{ marginTop: 200 }}>
      Actions <span aria-hidden="true">▾</span>
    </MenuButton>
    <MenuList position={positionTop}>
      <MenuItem onSelect={action("Download")}>Download</MenuItem>
      <MenuItem onSelect={action("Copy")}>Create a Copy</MenuItem>
      <MenuItem onSelect={action("Mark as Draft")}>Mark as Draft</MenuItem>
      <MenuItem onSelect={action("Delete")}>Delete</MenuItem>
    </MenuList>
  </Menu>
);
