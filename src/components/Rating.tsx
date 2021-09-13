import React, { useState } from "react";
import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface IRatingProps {
  size: number;
  scale: number;
  fillColor: string;
  strokeColor: string;
  value?: number;
  disableEdit?: boolean;
}
interface IRatingIconProps {
  fill: Boolean;
}
interface IRatingButtonProps {
  idx: number;
  fill: Boolean;
}

export const Rating = React.forwardRef<any, IRatingProps>(
  ({ size, scale, fillColor, strokeColor, value, disableEdit }, ref) => {
    const [rating, setRating] = useState(() => value ? Math.floor(value) : 0);
    const buttons = [];

    const onClick = (idx: number) => {
      if (!isNaN(idx)) {
        if (rating === 1 && idx === 1) {
          setRating(0);
        } else {
          setRating(idx);
        }
      }
    };

    const RatingIcon = ({ fill }: IRatingIconProps) => {
      return (
        <StarIcon
          h={`${size}px`}
          w={`${size}px`}
          color={fillColor}
          stroke={strokeColor}
          // onClick={onClick}
          fillOpacity={fill ? "100%" : "0"}
          mr="1"
        />
      );
    };

    const RatingButton = ({ idx, fill }: IRatingButtonProps) => {
      return (
        <Box
          as="button"
          aria-label={`Rate ${idx}`}
          onClick={() => disableEdit ? null : onClick(idx)}
          _focus={{ outline: 0 }}
        >
          <RatingIcon fill={fill} />
        </Box>
      );
    };

    for (let i = 1; i <= scale; i++) {
      buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />);
    }

    return <>{buttons}</>;
  }
);
