import 'styled-components';
import type { colorType, radiusType } from '../common/theme/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;
    color: { [key in colorType]: string };
    radius: { [key in radiusType]: string };
  }
}
