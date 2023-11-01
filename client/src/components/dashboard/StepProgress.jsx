import { Popover, Steps } from "antd";
import { useEffect } from "react";
import axios from "axios";
import useStore from "../../../store";
import useCustomMessage from "../../hooks/useCustomMessage";
import Loader from "../loader";

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

  const { error, contextHolder } = useCustomMessage();

  const getSteps = async () => {
    if (ptId) {
      await axios
        .get(
          `${
            import.meta.env.VITE_BACKEND_API
          }/talent/get/steps/?talentId=${ptId}`
        )
        .then((talentData) => {
          setStepsList(talentData.data);
          setShowProgress(true);
        })
        .catch((err) =>
          err.response.status === 401
            ? setNotAuthorised(true)
            : error(err.response.data.message)
        );
    }
  };

  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <strong className="text-sm">
          Step {index + 1} -- Status:{" "}
          {status === "wait" ? (
            <span className="text-yellow-600 ">ToComplete</span>
          ) : status === "finish" ? (
            <span className="text-green-700 ">Completed</span>
          ) : status === "process" ? (
            <span className="text-sky-700 ">InProgress</span>
          ) : (
            status
          )}
        </strong>
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
      {contextHolder}
      {showProgress ? (
        <>
          <div className="flex flex-col md:flex-row gap-2 h-full">
            <div className="flex flex-col m-2 items-start h-full">
              <strong className="text-sm">Beginner Path</strong>
              <br />
              <Steps
                current={
                  stepsList?.currentStep
                    ? stepsList?.currentStep?.comB?.current
                    : 1
                }
                progressDot={customDot}
                direction="vertical"
              >
                {stepsList && Object.keys(stepsList).includes("beginnerSteps")
                  ? stepsList.beginnerSteps.map((item, index) => (
                      <Steps.Step
                        key={index}
                        title={<span className="text-sm">{item}</span>}
                      />
                    ))
                  : null}
                <Steps.Step
                  title={<span className="text-sm">Intermediate Path</span>}
                  status={
                    stepsList?.currentStep
                      ? stepsList?.currentStep?.comB?.status
                      : "process"
                  }
                />
              </Steps>
              <br />
            </div>
            <div className="flex flex-col m-2 items-start h-full">
              <strong className="text-sm">Intermediate Path</strong>
              <br />
              <Steps
                current={
                  stepsList?.currentStep
                    ? stepsList?.currentStep?.comI?.current
                    : 1
                }
                progressDot={customDot}
                direction="vertical"
              >
                {stepsList &&
                Object.keys(stepsList).includes("intermediateSteps")
                  ? stepsList.intermediateSteps.map((item, index) => (
                      <Steps.Step
                        key={index}
                        title={<span className="text-sm">{item}</span>}
                      />
                    ))
                  : null}
                <Steps.Step
                  title={<span className="text-sm">Advanced Path</span>}
                  status={
                    stepsList?.currentStep
                      ? stepsList?.currentStep?.comA?.status
                      : "process"
                  }
                />
              </Steps>
              <br />
            </div>
            <div className="flex flex-col m-2 items-start h-full">
              <strong className="text-sm">Advanced Path</strong>
              <br />
              <Steps
                current={
                  stepsList?.currentStep
                    ? stepsList?.currentStep?.comA?.current
                    : 1
                }
                progressDot={customDot}
                direction="vertical"
              >
                {stepsList && Object.keys(stepsList).includes("advancedSteps")
                  ? stepsList.advancedSteps.map((item, index) => (
                      <Steps.Step
                        key={index}
                        title={<span className="text-sm">{item}</span>}
                      />
                    ))
                  : null}
                <Steps.Step
                  title={
                    <span className="text-sm">
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
          <Loader />
        </div>
      )}
    </div>
  );
};

export default StepProgress;
