import axios from "axios";

type IMessage = {
  name?: string;
  phone?: string;
};

export const postMessage = async (
  data: IMessage,
  successCallback: (prop: any) => void,
  errorCallback?: () => void
) => {
  try {
    let response = await axios.post("https://testurl.com/send", data);
    successCallback(response?.data);
  } catch (e) {
    console.error(e);
    errorCallback && errorCallback();
  }
};
