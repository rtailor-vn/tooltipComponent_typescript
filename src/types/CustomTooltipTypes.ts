import * as React from "react";
import {TooltipProps} from "@mui/material";

interface SXProps {
    backgroundColor: React.CSSProperties | string;
    borderRadius: React.CSSProperties | string;
}

export interface CustomTooltipProps extends Omit<TooltipProps, 'title'>{
    sx: SXProps;
    content: NonNullable<React.ReactNode> | string;
    placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
    disableHoverListener?: boolean;
    children: React.ReactElement<any, any>;
}