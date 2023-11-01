import s1 from "../../../assets/images/guides/freecodecamp/s1.png";
import s2 from "../../../assets/images/guides/freecodecamp/s2.png";
import s3 from "../../../assets/images/guides/freecodecamp/s3.png";
import s4 from "../../../assets/images/guides/freecodecamp/s4.png";
import s5 from "../../../assets/images/guides/freecodecamp/s5.png";

const FreeCodeCamp = () => {
  return (
    <section className="guide">
      <div className="pt-16"></div>
      <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-[70%]">
        <div className="flex flex-col justify-center p-5">
          <h1 className="text-xl mt-3 text-center">
            Guide to configure FreeCodeCamp account
          </h1>
          <ol className="text-gray-800">
            <li>
              <p>
                If you don{"'"}t have any account in FreeCodeCamp
                organization,then you go to below link
                <br />
                <a
                  href="https://www.freecodecamp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 hover:text-blue-500 underline"
                >
                  https://www.freecodecamp.org/
                </a>
                <br />
                You will see interface as below.
              </p>
              <div className="flex justify-center mt-3">
                <img className="screenshot" src={s1} alt="" />
              </div>
            </li>
            <li>
              <p>
                Now click on sign in button on top right corner
                <br />
                Next interface will be visible as below and you can signup or
                login using social account too
              </p>
              <div className="flex justify-center mt-3">
                <img className="screenshot" src={s2} alt="" />
              </div>
            </li>
            <li>
              <p>
                After successfull login, we can see interface as below and{" "}
                <br />
                Now click on menu button on top right corner and then you click
                on settings from the dropdown menu{" "}
              </p>
              <div className="flex justify-center mt-3">
                <img className="screenshot" src={s3} alt="" />
              </div>
            </li>
            <li>
              <p>
                After clicking on settings then you will see new interface as
                below.
                <br />
                <strong>HiTalent </strong>
                needs username which is you have here and please note that when
                you change username then
                {","}
                <br />
                please update the respective FreeCodeCamp username in your
                HiTalent profile.
              </p>
              <div className="flex justify-center mt-3">
                <img className="screenshot" src={s4} alt="" />
              </div>
            </li>
            <li>
              <p>
                When on scrolling below, you will get to see privacy settings as
                below.
                <br />
                Change below shown public fields to public if they are private
                in your privacy settings{"."}
              </p>
              <div className="flex justify-center mt-3">
                <img className="screenshot" src={s5} alt="" />
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default FreeCodeCamp;
