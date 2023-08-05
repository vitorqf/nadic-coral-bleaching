import { StyledText } from './styles';

export function Text({ text, color }: { text: string; color?: string }) {
  return <StyledText $color={color}>{text}</StyledText>;
}
