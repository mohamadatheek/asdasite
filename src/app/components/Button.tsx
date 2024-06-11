import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button as ButtonComponent, SxProps } from "@mui/material";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  classes?: string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  disabled?: boolean;
  disableRipple?: boolean;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  onClick?: (e: any) => void;
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  sx?: SxProps;
}
export const Button: React.FC<Props> = (props) => {
  const {
    children,
    color,
    disableRipple,
    disabled,
    endIcon,
    fullWidth,
    size,
    startIcon,
    variant,
    sx,
    ...rest
  } = props;
  return (
    <ButtonComponent
      color={color || "primary"}
      disableRipple={disableRipple || false}
      disabled={disabled || false}
      endIcon={endIcon}
      fullWidth={fullWidth}
      size={size || "small"}
      startIcon={startIcon}
      variant={variant || "contained"}
      sx={sx}
      {...rest}
    >
      {children}
    </ButtonComponent>
  );
};
