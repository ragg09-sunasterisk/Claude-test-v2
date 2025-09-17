# COMPANY-STANDARD.md

This file provides company coding standard to guide claude-code-review additional user-defined rules

## Import Convention
- external packages, libraries, utils should be group together
- internal resources should be group together
- these two groups should be separated by one line
- each group must be sorted by length

### Bad Example
```
import { Logo, NavItem, SearchInput } from "@/components/ui";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Divider,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  NotificationsOutlined as NotificationsIcon,
  AccountCircle as AccountIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useState } from "react";
```

### GoodExample
```
import { useState } from "react";
import {
  Box,
  Menu,
  List,
  Drawer,
  AppBar,
  Avatar,
  Divider,
  Toolbar,
  MenuItem,
  ListItem,
  useTheme,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  AccountCircle as AccountIcon,
  NotificationsOutlined as NotificationsIcon,
} from "@mui/icons-material";
import { Logo, NavItem, SearchInput } from "@/components/ui";
```