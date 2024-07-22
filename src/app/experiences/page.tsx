import { Badge } from '@/components/badge';
import { Text } from '@/components/text';
import { Title } from '@/components/title';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CalendarIcon, RocketIcon } from '@radix-ui/react-icons';
import type { FC } from 'react';

const EXPERIENCES = [
  {
    title: 'System Developer',
    company: 'Doserne',
    location: 'Oslo, Norway',
    type: 'Full-time',
    description:
      'Doserne is a company that offers a digital solution for the construction industry. I worked on the development of a new feature that allows the user to create and manage projects, as well as the integration of the new feature with the existing system.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'AWS',
    ],
    date: 'August 2024 - Present',
  },
  {
    title: 'Software Developer',
    company: 'Apiir ',
    location: 'Trondheim, Norway',
    type: 'Full-time',
    description:
      'As a developer in Apiir i worked on both web and mobile applications. Apiir offers a bike customization tool that is used in both home and retail stores. I have developed an internal admin dashboard, contributed to the development of the AI model and the mobile application in Flutter.',
    technologies: [
      'React',
      'Next.js',
      'Flutter',
      'Nest.js',
      'TypeScript',
      'PostgreSQL',
      'Docker',
      'Google Cloud Platform',
      'Firebase',
    ],
    date: 'January 2024 - August 2024',
  },
  {
    title: 'IT Consultant',
    company: 'Variant',
    location: 'Trondheim, Norway',
    type: 'Internship',
    description:
      'Worked as a consultant for Ludenso, a company that offers AR experiences in textbooks. We developed a dashboard for the publishers, authors and Ludenso so that they received detailed and actionable information.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Agile',
      'Azure',
      'Kusto Query Language (KQL)',
    ],
    date: 'July 2023 - September 2023',
  },
  {
    title: 'Full Stack Developer',
    company: 'Nuine',
    location: 'Trondheim, Norway',
    type: 'Part-time',
    description:
      'Nuine is a startup that provides live-streaming tools for online stores. I contributed with the development of payment solutions, authentication, and user access, designed statistical and product overviews, as well as the work with cybersecurity testing.',
    technologies: [
      'React',
      'Gatsby.js',
      'TypeScript',
      'Firebase',
      'Stripe',
      'Mux',
      'Redux',
      'Tailwind CSS',
    ],
    date: 'February 2023 - November 2023',
  },
];

const ExperiencesPage: FC = () => {
  return (
    <section className="max-w-screen-lg px-4 pt-8 lg:px-8 lg:py-8 mx-auto">
      <Title className="lg:text-4xl">Experiences</Title>
      <Text className="pb-10">
        I've had the opportunity to engage with a diverse set of technologies,
        teams, and companies. This page provides a brief overview of the
        significant experiences in my career.
      </Text>
      <Card>
        {EXPERIENCES.map((experience, index) => {
          return (
            <article key={experience.company}>
              <CardHeader>
                <CardTitle>
                  {experience.title} at {experience.company}{' '}
                  <span className="text-gs-11 dark:text-gsDark-11 text-sm">
                    ({experience.type})
                  </span>
                </CardTitle>
                <CardDescription className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  {experience.date}
                </CardDescription>
                <CardDescription className="flex items-center">
                  <RocketIcon className="w-4 h-4 mr-1" />
                  {experience.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{experience.description}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </CardFooter>
              {index !== EXPERIENCES.length - 1 && (
                <hr className="border-gs-7 dark:border-gsDark-7" />
              )}
            </article>
          );
        })}
      </Card>
    </section>
  );
};

export default ExperiencesPage;
