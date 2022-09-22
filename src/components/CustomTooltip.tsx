import {CustomTooltipProps} from "types/CustomTooltipTypes";
import {Tooltip} from "@mui/material";

const CustomTooltip = ({sx, disableHoverListener = false, placement = "top",content, children, ...rest}: CustomTooltipProps) => {
    return (
        <Tooltip title={content} sx={{...sx}} disableHoverListener={disableHoverListener} placement={placement} {...rest}>
            {children}
        </Tooltip>
    )
}

export default CustomTooltip;