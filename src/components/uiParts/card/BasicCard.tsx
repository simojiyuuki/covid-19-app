import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

type Props = {
  children?: React.ReactNode;
  title?: string;
  minWidth?: number;
  minHeight?: number;
  leftBorderColor: string;
};

const BasicCard: React.FC<Props> = ({
  children,
  title,
  minWidth = 100,
  minHeight = 100,
  leftBorderColor = 'none'
}: Props) => {
  return (
    <Card sx={{ minWidth: minWidth, minHeight: minHeight }}>
      <_Card leftBorderColor={leftBorderColor}>
        <CardContent>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h6">{children}</Typography>
        </CardContent>
      </_Card>
    </Card>
  );
};

const _Card = styled.div<Props>`
  border-left: solid 5px ${({ leftBorderColor }) => leftBorderColor};
`;

export default BasicCard;
