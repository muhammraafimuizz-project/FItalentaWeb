import {
  Company,
  Faq,
  Footer,
  Header,
  Hero,
  Steps,
} from "./components/LandingSections";
import { ProgramTable } from "./components/ProgramTable";
import { RegisterForm } from "./components/RegisterForm";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="konten">
        <Hero />
        <ProgramTable />
        <Steps />
        <Company />
        <Faq />
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
}
