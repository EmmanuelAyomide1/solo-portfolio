import FooterEmail from "./FooterEmail";
import FooterNav from "./FooterNav";
import Skills from "./Skills";

function Footer() {
  return (
    <section className="relative flex justify-center bg-white p-5 md:p-10 md:pb-0">
      <div className="flex w-full max-w-[1300px] flex-col items-center space-y-10 overflow-clip py-10 md:px-20">
        <Skills></Skills>
        <FooterEmail />
        <FooterNav />
      </div>
    </section>
  );
}

export default Footer;
