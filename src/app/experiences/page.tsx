import { Badge } from '@/components/badge';
import { Grid } from '@/components/grid';
import { Title } from '@/components/title';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { FC } from 'react';

const EXPERIENCES = [
  {
    title: 'System Developer',
    company: 'Doserne',
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
    company: 'Apiir',
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
      <Card>
        {EXPERIENCES.map((experience, index) => (
          <article key={experience.company}>
            <CardHeader>
              <CardTitle>
                {experience.title} at <strong>{experience.company}</strong>
              </CardTitle>
              <CardDescription>{experience.date}</CardDescription>
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
              <hr className="border-greyscale-7 dark:border-darkgreyscale-7" />
            )}
          </article>
        ))}
      </Card>
    </section>
  );
};

export default ExperiencesPage;
