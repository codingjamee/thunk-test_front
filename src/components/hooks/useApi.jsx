import { useEffect, useState, useCallback } from "react";
import { API_FETCHER } from "../../utils/axiosConfig";
// import { useErrorBoundary } from "react-error-boundary";

const useApi = ({
  method = "get",
  path = "",
  data = {},
  shouldInitFetch = false,
  initialResult = "",
}) => {
  const [result, setResult] = useState(initialResult);
  const [loading, setLoading] = useState(false);
  const [reqIdentifier, setReqIdentifier] = useState("");
  const [error, setError] = useState(false);
  // const { showBoundary } = useErrorBoundary();

  const trigger = useCallback(
    async ({
      method: triggerMethod = method,
      path: triggerPath = path,
      data: triggerData = data,
      applyResult = false,
      isShowBoundary = true,
    }) => {
      setLoading(true);
      setReqIdentifier(triggerMethod + "Data");
      try {
        const triggerResult = await API_FETCHER[triggerMethod](
          triggerPath,
          triggerData
        );

        if (applyResult) {
          setResult(triggerResult);
          return result;
        }
        return triggerResult;
      } catch (err) {
        console.log(err);
        if (isShowBoundary) {
          //에러 바운더리를 보여줘야 할때만 보여줌
          // showBoundary(err);
          return;
        }
        setError(err);
        return;
      } finally {
        setLoading(false);
      }
    },
    [data, method, path, result]
  );

  useEffect(() => {
    shouldInitFetch && console.log("초기 요청합니다!!", method, path);
    shouldInitFetch && trigger({ method, path, data });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { result, loading, reqIdentifier, trigger, error };
};
export default useApi;
