import { Grid } from '@/components/grid';
import { ModeToggle } from '@/components/mode-toggle';
import { Text } from '@/components/text';
import { Title } from '@/components/title';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className="max-w-screen-lg px-4 pt-8 lg:px-8 lg:py-16 mx-auto">
        <address className="grid md:grid-cols-5 w-full">
          <header className="md:col-span-4 not-italic flex flex-col justify-center">
            <Title>Software, music and design</Title>
            <Text constrained>
              I'm Billy, a software engineer, amature musician and designer. I
              love to work on the coolest projects and make things people enjoy.
              Currently working at{' '}
              <a
                className="text-brand-12 dark:text-brandDark-12 hover:underline"
                href="https://doserne.com"
              >
                Doserne
              </a>
              .
            </Text>
          </header>
          <div className="flex order-first md:order-last justify-center">
            <div className=" relative image-container before:bg-brand-8 dark:before:bg-brandDark-8">
              <div className="slider-thumb block " />
              <Image
                src="/cv.jpeg"
                alt="Billy"
                width={200}
                height={200}
                className="rounded-md relative z-10"
              />
            </div>
          </div>
        </address>
        <ModeToggle />
      </section>
    </main>
  );
}
