"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";

interface NavItemProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  variant?: "text" | "outlined" | "contained";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
}

const StyledNavButton = styled(Button)<{ active?: boolean }>(
  ({ theme, active }) => ({
    minWidth: "auto",
    textTransform: "none",
    fontWeight: active ? 600 : 400,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 2),
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    ...(active && {
      backgroundColor: theme.palette.action.selected,
      "&:hover": {
        backgroundColor: theme.palette.action.selected,
      },
    }),
  })
);

export default function NavItem({
  children,
  href,
  onClick,
  active = false,
  variant = "text",
  startIcon,
  endIcon,
  disabled = false,
}: NavItemProps) {
  const router = useRouter();
  const handleClick = () => {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <StyledNavButton
      variant={variant}
      active={active}
      onClick={handleClick}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      <Typography variant="body2" color="inherit">
        {children}
      </Typography>
    </StyledNavButton>
  );
}
