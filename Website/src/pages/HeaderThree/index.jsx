import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Text, Img } from "../../components";

export default function HeaderThreePage() {
  return (
    <>
      <Helmet>
        <title>Neuradetect</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-gray-50">
        <div className="h-[1658px] w-full relative">
          <div className="justify-center h-[1658px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-gradient absolute" />
          <div className="h-[1402px] w-full top-0 right-0 left-0 m-auto absolute">
            <Img
              src="images/img_n_n_btbjcfuvbxs_unsplash.png"
              alt="nnbtbjcfuvbxs"
              className="justify-center h-[1402px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <div className="flex flex-col items-start justify-start w-[81%] gap-[165px] right-[6%] top-[2%] m-auto absolute">
              <header className="flex justify-center items-center w-[81%] ml-[270px] md:ml-5">
                <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                  <div className="flex flex-row justify-between w-[35%] sm:w-full mt-[15px] sm:mt-0">
                    <ul className="flex flex-row justify-center">
                      <li>
                        <a href="#">
                          <Heading
                            as="h6"
                            className="!text-blue_gray-900 tracking-[0.24px] text-center !text-[16.66px]"
                          >
                            Home
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="ml-6 sm:ml-5">
                          <Heading
                            as="h6"
                            className="!text-blue_gray-900 tracking-[0.24px] text-center !text-[16.66px]"
                          >
                            Product
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="ml-[31px] sm:ml-5">
                          <Heading
                            as="h6"
                            className="!text-blue_gray-900 tracking-[0.24px] text-center !text-[16.66px]"
                          >
                            About Us{" "}
                          </Heading>
                        </a>
                      </li>
                    </ul>
                    <a href="#">
                      <Heading as="h6" className="!text-blue_gray-900 tracking-[0.24px] text-center !text-[16.66px]">
                        Contact
                      </Heading>
                    </a>
                  </div>
                  <Button size="sm" className="sm:px-5 font-semibold min-w-[200px] rounded-[5px]">
                    Detect a Scan
                  </Button>
                </div>
              </header>
              <div className="flex flex-row justify-start w-[52%] md:w-full">
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full gap-[41px]">
                    <Heading size="md" as="h1" className="!text-blue_gray-900 tracking-[0.24px] !text-[69.02px]">
                      <>
                        NeuroDetect
                        <br />{" "}
                      </>
                    </Heading>
                    <Text as="p" className="w-[83%] tracking-[0.24px] !text-[23.8px]">
                      NeuroDetect is at the forefront of leveraging advanced technology to bring hope and clarity to
                      individuals and families potentially facing Alzheimer&#39;s disease. Our mission is to empower
                      users by providing a user-friendly, secure platform where individuals can gain insights into their
                      neurological health through state-of-the-art analysis of MRI images.
                    </Text>
                    <div className="flex flex-row sm:flex-col justify-start gap-[11px] sm:gap-5">
                      <Button shape="round" className="sm:px-5 font-bold min-w-[220px]">
                        Get Quote Now
                      </Button>
                      <a href="#" className="px-[35px] py-5 sm:px-5 border-blue-500 border border-solid rounded-[30px]">
                        <Heading
                          as="h2"
                          className="!text-blue-500 tracking-[0.24px] text-center !text-[16.66px] !font-bold"
                        >
                          Learn More
                        </Heading>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
