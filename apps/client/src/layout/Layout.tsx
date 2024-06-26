import { Toaster } from "../components/ui/toaster";
import {} from "../components/ui/navigation-menu";
import { NavigationMenuDemo } from "../components/ui/navbar";
type Props = {
  children: React.ReactNode;
};

function DefaultLayout({ children }: Props) {
  return (
    <main className="flex flex-col dark:bg-darkBackground">
      <NavigationMenuDemo />
      <Toaster />
      <section className="px-8 max-md:px-8 lg:px-16 py-4 mb-4 ">
        {children}
      </section>
    </main>
  );
}

export default DefaultLayout;
