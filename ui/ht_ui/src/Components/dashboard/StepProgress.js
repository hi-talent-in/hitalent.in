import { Popover, Steps } from "antd";
import React, { useEffect } from "react";
import { useStore } from "../../store";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const StepProgress = () => {
  const {
    stepsList,
    setStepsList,
    setNotAuthorised,
    getProgressBool,
    ptId,
    currentLang,
    currentTrack,
    showProgress,
    setShowProgress,
  } = useStore((state) => ({
    stepsList: state.stepsList,
    setStepsList: state.setStepsList,
    setNotAuthorised: state.setNotAuthorised,
    getProgressBool: state.getProgressBool,
    ptId: state.ptId,
    currentLang: state.currentLang,
    currentTrack: state.currentTrack,
    showProgress: state.showProgress,
    setShowProgress: state.setShowProgress,
  }));

  const getSteps = async () => {
    if (ptId) {
      await axios
        .get(
          `${process.env.REACT_APP_BACKEND_API}/talent/get/steps/?talentId=${ptId}`
        )
        .then((talentData) => {
          setStepsList(talentData.data);
          setShowProgress(true);
        })
        .catch((err) =>
          err.response.status === 401
            ? setNotAuthorised(true)
            : toast.error(err.response.data.message)
        );
    }
  };

  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <small className="text-xl font-serif">
          Step {index + 1} -- Status:{" "}
          {status === "wait" ? (
            <span className="text-yellow-600 font-serif">ToComplete</span>
          ) : status === "finish" ? (
            <span className="text-green-700 font-serif">Completed</span>
          ) : status === "process" ? (
            <span className="text-sky-700 font-serif">InProgress</span>
          ) : (
            status
          )}
        </small>
      }
    >
      {dot}
    </Popover>
  );

  useEffect(() => {
    if (getProgressBool) {
      getSteps();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProgressBool]);

  return (
    <div>
      {showProgress ? (
        <>
          <div className="flex flex-col m-2 items-center bg-white w-[98%] mx-auto">
            <div className="w-[95%] mx-auto overflow-auto ">
              <strong className="font-sans ">Beginner Path Progress</strong>
              <br />
              <br />
              <Steps
                current={
                  stepsList?.currentStep
                    ? stepsList?.currentStep?.comB?.current
                    : 1
                }
                progressDot={customDot}
              >
                {stepsList && Object.keys(stepsList).includes("beginnerSteps")
                  ? stepsList.beginnerSteps.map((item, index) => (
                      <Steps.Step
                        key={index}
                        title={<span className="font-serif ">{item}</span>}
                      />
                    ))
                  : null}
                <Steps.Step
                  title={<span className="font-serif">Intermediate Path</span>}
                  status={
                    stepsList?.currentStep
                      ? stepsList?.currentStep?.comB?.status
                      : "process"
                  }
                />
              </Steps>
              <br />
            </div>
          </div>
          <div className="flex flex-col m-2 items-center bg-white w-[98%] mx-auto">
            <div className="w-[95%] mx-auto overflow-auto ">
              <strong className="font-sans ">Intermediate Path Progress</strong>
              <br />
              <br />
              <Steps
                current={
                  stepsList?.currentStep
                    ? stepsList?.currentStep?.comI?.current
                    : 1
                }
                progressDot={customDot}
              >
                {stepsList &&
                Object.keys(stepsList).includes("intermediateSteps")
                  ? stepsList.intermediateSteps.map((item, index) => (
                      <Steps.Step
                        key={index}
                        title={<span className="font-serif ">{item}</span>}
                      />
                    ))
                  : null}
                <Steps.Step
                  title={<span className="font-serif">Advanced Path</span>}
                  status={
                    stepsList?.currentStep
                      ? stepsList?.currentStep?.comA?.status
                      : "process"
                  }
                />
              </Steps>
              <br />
            </div>
          </div>
          <div className="flex flex-col m-2 items-center bg-white w-[98%] mx-auto">
            <div className="w-[95%] mx-auto overflow-auto ">
              <strong className="font-sans ">Advanced Path Progress</strong>
              <br />
              <br />
              <Steps
                current={
                  stepsList?.currentStep
                    ? stepsList?.currentStep?.comA?.current
                    : 1
                }
                progressDot={customDot}
              >
                {stepsList && Object.keys(stepsList).includes("advancedSteps")
                  ? stepsList.advancedSteps.map((item, index) => (
                      <Steps.Step
                        key={index}
                        title={<span className="font-serif ">{item}</span>}
                      />
                    ))
                  : null}
                <Steps.Step
                  title={
                    <span className="font-serif">
                      Junior{" "}
                      {currentLang === "java"
                        ? "Java"
                        : currentTrack === "frontend"
                        ? "Frontend"
                        : currentTrack === "backend"
                        ? "Backend"
                        : currentTrack === "fullstack"
                        ? "FullStack"
                        : "Web"}{" "}
                      Developer
                    </span>
                  }
                  status={
                    stepsList?.currentStep
                      ? stepsList?.currentStep?.comA?.status
                      : "process"
                  }
                />
              </Steps>
              <br />
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center mt-32">
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 24,
                }}
                spin
              />
            }
          />
        </div>
      )}
    </div>
  );
};

export default StepProgress;
