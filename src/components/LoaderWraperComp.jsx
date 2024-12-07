/* eslint-disable react/prop-types */
import { Empty } from "antd";
import { RotatingLines } from "react-loader-spinner";
import { cn } from "../lib/utils";

const LoaderWraperComp = ({
  isLoading,
  isError,
  className,
  loader,
  dataEmpty = false,
  children,
}) => {
  if (isLoading || isError || dataEmpty) {
    return (
      <div
        className={cn(
          `h-[50vh] w-full flex flex-col justify-center items-center`,
          className
        )}
      >
        {isLoading ? (
          <>
            {loader || (
              <RotatingLines
                visible={true}
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                height="60"
                width="60"
                color="#222f6b"
                radius="12.5"
                wrapperClass="grid-wrapper"
                wrapperStyle={{}}
              />
            )}
          </>
        ) : isError ? (
          <h1 className="text-red-400">Something want wrong!</h1>
        ) : (
          <h1 className="text-green-400">
            {isError ? isError : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
          </h1>
        )}
      </div>
    );
  }
  return children;
};

export default LoaderWraperComp;
