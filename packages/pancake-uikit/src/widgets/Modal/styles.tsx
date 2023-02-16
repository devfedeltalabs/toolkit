/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { Box } from "../../components/Box";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { ModalProps } from "./types";

export const ModalHeader = styled.div<{ background?: string, position?: string }>`
  align-items: center;
  display: flex;
  padding: 12px 24px;
  position: ${({position}) => position || 'inherit'};
  height: 48px;
`;

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
  height: 100%;
`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalIcon = styled(Flex)`
  width: 100%;
  height: 72px;
  justify-content: center;
  align-items: center;
`;

export const ModalCloseButton: React.FC<{ onDismiss: ModalProps["onDismiss"] }> = ({ onDismiss }) => {
  return (
    <CsIconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
      <CsCloseIcon color="text" />
    </CsIconButton>
  );
};

export const ModalBackButton: React.FC<{ onBack: ModalProps["onBack"] }> = ({ onBack }) => {
  return (
    <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
      <ArrowBackIcon color="text" />
    </IconButton>
  );
};

export const ModalContainer = styled(Box)<{ minWidth: string }>`
  overflow: hidden;
  background: ${({ theme }) => theme.modal.background};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 5px;
  width: 100%;
  max-height: 100vh;
  z-index: ${({ theme }) => theme.zIndices.modal};

  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
  }
`;


const CsIconButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
`

const CsCloseIcon = styled(CloseIcon)`
  fill:  ${({ theme }) => theme.colors.text};
`