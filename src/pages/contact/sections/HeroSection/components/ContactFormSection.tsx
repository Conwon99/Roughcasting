import { ContactForm } from "@/pages/contact/components/ContactForm";
import { PhoneLink } from "@/components/PhoneLink";

export const ContactFormSection = () => {
  return (
    <div className="box-border caret-transparent mb-[50px] md:mb-[70px]">
      <PhoneLink
        iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
        iconAlt="Phone"
        showIcon={true}
        trackingLocation="contact-form"
        className="text-white items-center box-border caret-transparent gap-x-3 flex justify-center mb-8"
        displayClassName="text-white text-lg font-bold box-border caret-transparent leading-[23.4px] md:text-[22px] md:leading-[28.6px]"
      />
      <div className="bg-[#15803d] box-border caret-transparent p-4 sm:p-5 rounded-[20px] md:p-10 max-w-[800px] mx-auto border-2 border-[#15803d] shadow-lg">
        <div className="box-border caret-transparent mb-[15px]">
          <ContactForm />
          <div
            role="region"
            aria-label="Contact Form success"
            className="text-white bg-[#15803d] box-border caret-transparent hidden text-center p-[15px] rounded-[20px]"
          >
            <div className="box-border caret-transparent">
              Thank you! Your submission has been received!
            </div>
          </div>
          <div
            role="region"
            aria-label="Contact Form failure"
            className="text-white bg-[#16a34a] box-border caret-transparent hidden text-center mt-2.5 p-[15px] rounded-[20px]"
          >
            <div className="box-border caret-transparent">
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

