import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Img, Text } from "../../components";

export default function FeaturesFourPage() {
  return (
    <>
      <Helmet>
        <title>Neuradetect</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-start w-full pl-[198px] pr-14 md:px-5 bg-white-A700">
        <div className="flex flex-col items-start justify-start w-full py-[59px] mx-auto md:py-5 max-w-[1249px]">
          <div className="flex flex-row justify-start w-full py-[53px] md:py-5">
            <div className="flex flex-row justify-start w-[49%]">
              <div className="flex flex-col items-start justify-start w-full pb-[23px] gap-[136px] sm:pb-5">
                <Heading size="s" as="h1" className="!text-blue_gray-900 tracking-[0.24px] !text-[47.6px]">
                  Detect Alzheimers{" "}
                </Heading>
                <Text size="xs" as="p" className="tracking-[0.24px] !text-[16.66px]">
                  Find problems within the brain and resolve the conflict between
                </Text>
              </div>
            </div>
          </div>
          <div className="w-full ml-0.5 gap-[35px] grid-cols-3 md:grid-cols-2 md:gap-5 md:ml-0 sm:grid-cols-1 grid">
            <div className="flex flex-row justify-start items-center w-full gap-[18px] p-[23px] sm:p-5 border-gray-300 border border-solid bg-gray-50 rounded-sm">
              <div className="flex flex-col items-center justify-center h-[85px] w-[85px] p-7 sm:p-5 bg-blue-500 rounded-[42px]">
                <Img src="images/img_icn_resize_icn_sm.svg" alt="image" className="h-[23px] my-0.5" />
              </div>
              <Heading as="h2" className="w-[31%] tracking-[0.24px] !text-[16.66px] !leading-7">
                <>
                  Put The <br />
                  Clients First
                </>
              </Heading>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-[18px] p-[23px] sm:p-5 border-gray-300 border border-solid bg-gray-50 rounded-sm">
              <div className="flex flex-col items-center justify-center h-[85px] w-[85px] p-7 sm:p-5 bg-blue-500 rounded-[42px]">
                <Img src="images/img_icn_resize_icn_sm.svg" alt="icnresizeicn" className="h-[23px] my-0.5" />
              </div>
              <Heading as="h3" className="w-[31%] tracking-[0.24px] !text-[16.66px] !leading-7">
                <>
                  Put The <br />
                  Clients First
                </>
              </Heading>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-[18px] p-[23px] sm:p-5 border-gray-300 border border-solid bg-gray-50 rounded-sm">
              <div className="flex flex-col items-center justify-center h-[85px] w-[85px] p-7 sm:p-5 bg-blue-500 rounded-[42px]">
                <Img src="images/img_icn_resize_icn_sm.svg" alt="icnresizeicn" className="h-[23px] my-0.5" />
              </div>
              <Heading as="h4" className="w-[31%] tracking-[0.24px] !text-[16.66px] !leading-7">
                <>
                  Put The <br />
                  Clients First
                </>
              </Heading>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-[18px] p-[23px] sm:p-5 border-gray-300 border border-solid bg-gray-50 rounded-sm">
              <div className="flex flex-col items-center justify-center h-[85px] w-[85px] p-7 sm:p-5 bg-blue-500 rounded-[42px]">
                <Img src="images/img_icn_resize_icn_sm.svg" alt="icnresizeicn" className="h-[23px] my-0.5" />
              </div>
              <Heading as="h5" className="w-[31%] tracking-[0.24px] !text-[16.66px] !leading-7">
                <>
                  Put The <br />
                  Clients First
                </>
              </Heading>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-[18px] p-[23px] sm:p-5 border-gray-300 border border-solid bg-gray-50 rounded-sm">
              <div className="flex flex-col items-center justify-center h-[85px] w-[85px] p-7 sm:p-5 bg-blue-500 rounded-[42px]">
                <Img src="images/img_icn_resize_icn_sm.svg" alt="icnresizeicn" className="h-[23px] my-0.5" />
              </div>
              <Heading as="h6" className="w-[31%] tracking-[0.24px] !text-[16.66px] !leading-7">
                <>
                  Put The <br />
                  Clients First
                </>
              </Heading>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-[18px] p-[23px] sm:p-5 border-gray-300 border border-solid bg-gray-50 rounded-sm">
              <div className="flex flex-col items-center justify-center h-[85px] w-[85px] p-7 sm:p-5 bg-blue-500 rounded-[42px]">
                <Img src="images/img_icn_resize_icn_sm.svg" alt="icnresizeicn" className="h-[23px] my-0.5" />
              </div>
              <Heading as="h6" className="w-[31%] tracking-[0.24px] !text-[16.66px] !leading-7">
                <>
                  Put The <br />
                  Clients First
                </>
              </Heading>
            </div>
          </div>
          <div className="flex flex-row justify-start w-[34%] md:w-full mt-[59px] mb-[5px]">
            <div className="flex flex-row sm:flex-col justify-start w-full gap-[11px] sm:gap-5">
              <Button shape="round" className="sm:px-5 font-bold min-w-[220px]">
                Get Quote Now
              </Button>
              <a href="#" className="px-[35px] py-5 sm:px-5 border-blue-500 border border-solid rounded-[30px]">
                <Heading as="h2" className="!text-blue-500 tracking-[0.24px] text-center !text-[16.66px] !font-bold">
                  Learn More
                </Heading>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
