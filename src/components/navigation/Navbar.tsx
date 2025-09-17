"use client";

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

interface NavLink {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

interface UserMenuAction {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  divider?: boolean;
}

interface NavbarProps {
  navLinks?: NavLink[];
  onLogoClick?: () => void;
  onSearch?: (query: string) => void;
  userMenuActions?: UserMenuAction[];
  showSearch?: boolean;
  showNotifications?: boolean;
  showUserMenu?: boolean;
  userAvatarSrc?: string;
  userName?: string;
}

const defaultNavLinks: NavLink[] = [
  { label: "Home", href: "/", active: true },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const defaultUserMenuActions: UserMenuAction[] = [
  {
    label: "Profile",
    icon: <AccountIcon fontSize="small" />,
    onClick: () => console.log("Profile clicked"),
  },
  {
    label: "Settings",
    icon: <SettingsIcon fontSize="small" />,
    onClick: () => console.log("Settings clicked"),
  },
  {
    label: "Logout",
    icon: <LogoutIcon fontSize="small" />,
    onClick: () => console.log("Logout clicked"),
    divider: true,
  },
];

export default function Navbar({
  navLinks = defaultNavLinks,
  onLogoClick,
  onSearch,
  userMenuActions = defaultUserMenuActions,
  showSearch = true,
  showNotifications = true,
  showUserMenu = true,
  userAvatarSrc,
  userName = "User",
}: NavbarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(
    null
  );

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const handleUserMenuAction = (action: UserMenuAction) => {
    action.onClick();
    handleUserMenuClose();
  };

  const renderDesktopNav = () => (
    <Box
      sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}
    >
      {navLinks.map((link, index) => (
        <NavItem
          key={index}
          href={link.href}
          onClick={link.onClick}
          active={link.active}
        >
          {link.label}
        </NavItem>
      ))}
    </Box>
  );

  const renderMobileNav = () => (
    <Drawer
      anchor="left"
      open={mobileMenuOpen}
      onClose={handleMobileMenuToggle}
      sx={{
        "& .MuiDrawer-paper": {
          width: 250,
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Logo size="small" onClick={onLogoClick} />
      </Box>
      <Divider />
      <List>
        {navLinks.map((link, index) => (
          <ListItem key={index} sx={{ p: 0 }}>
            <NavItem
              href={link.href}
              onClick={() => {
                link.onClick?.();
                setMobileMenuOpen(false);
              }}
              active={link.active}
            >
              {link.label}
            </NavItem>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  const renderActions = () => (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {showSearch && !isMobile && (
        <SearchInput placeholder="Search..." onSearch={onSearch} size="small" />
      )}

      {showNotifications && (
        <IconButton
          color="inherit"
          aria-label="notifications"
          onClick={() => console.log("Notifications clicked")}
        >
          <NotificationsIcon />
        </IconButton>
      )}

      {showUserMenu && (
        <>
          <IconButton
            color="inherit"
            aria-label="user menu"
            onClick={handleUserMenuOpen}
          >
            {userAvatarSrc ? (
              <Avatar src={userAvatarSrc} sx={{ width: 32, height: 32 }} />
            ) : (
              <Avatar sx={{ width: 32, height: 32 }}>
                {userName.charAt(0).toUpperCase()}
              </Avatar>
            )}
          </IconButton>
          <Menu
            anchorEl={userMenuAnchor}
            open={Boolean(userMenuAnchor)}
            onClose={handleUserMenuClose}
            onClick={handleUserMenuClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            {userMenuActions.map((action, index) => [
              action.divider && index > 0 && (
                <Divider key={`divider-${index}`} />
              ),
              <MenuItem
                key={index}
                onClick={() => handleUserMenuAction(action)}
              >
                {action.icon}
                {action.label}
              </MenuItem>,
            ])}
          </Menu>
        </>
      )}
    </Box>
  );

  return (
    <>
      <AppBar position="static" elevation={1}>
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Logo
            size={isMobile ? "small" : "medium"}
            variant={isMobile ? "icon" : "full"}
            color="inherit"
            onClick={onLogoClick}
          />

          <Box sx={{ flexGrow: 1 }} />

          {!isMobile && renderDesktopNav()}

          <Box sx={{ flexGrow: 1 }} />

          {renderActions()}
        </Toolbar>
      </AppBar>

      {renderMobileNav()}
    </>
  );
}
