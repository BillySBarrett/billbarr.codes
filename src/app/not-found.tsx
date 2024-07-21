import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-screen-md text-center  px-4 pt-8 lg:px-8 lg:py-40 flex flex-col gap-8 mx-auto">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p>
          "Well, this is awkward. You've found the secret lair of the 404 error!
          Unfortunately, it's empty. Maybe it's out saving other lost pages. In
          the meantime, why not head back and try something else? Or, if you're
          feeling adventurous, refresh and see if the lair magically reappears!"
        </p>
      </div>
    </div>
  );
}
