'use client';
import Image from 'next/image';

import Title from '../common/components/Title';
import { useTheme } from 'styled-components';

export default function Home() {
  const theme = useTheme();
  return (
    <div>
      <main>
        <Title>Hi!!!</Title>
        <button onClick={() => theme.setTheme()}>mode</button>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
    </div>
  );
}
