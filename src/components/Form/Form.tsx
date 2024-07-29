import Title from "../Title/Title";
import InputMask from "react-input-mask";
import "./form.scss";
import { ChangeEvent, useState } from "react";
import { ReactComponent as Correct } from "../../assets/icons/correct.svg";
import { ReactComponent as Error } from "../../assets/icons/error.svg";
import { postMessage } from "../../API/commonAPI";

type IForm = {
  name?: string;
  phone?: string;
};

const formDefault: IForm = {
  name: undefined,
  phone: undefined,
};

type FormErrors = {
  name: boolean;
  phone: boolean;
};

const FormErrorsDefault: FormErrors = {
  name: false,
  phone: false,
};

function Form() {
  const [data, setData] = useState<IForm>(formDefault);
  const [userAgreement, setUserAgreement] = useState(false);
  const [formInputError, setFormInputError] =
    useState<FormErrors>(FormErrorsDefault);

  const handlerErrorChange = (key: keyof FormErrors, error: boolean) => {
    setFormInputError({ ...formInputError, [key]: error });
  };

  const formValidation = (type: string, value: string): boolean => {
    switch (type) {
      case "phone":
        if (value.replace(/[() -+-]/g, "").length <= 1) {
          return false;
        }
        return value && value.replace(/[() -+-]/g, "").length === 11
          ? false
          : true;
      case "name":
        if (value === "") {
          return false;
        }
        let re = /^[A-Za-zА-Яа-я]+$/;
        return !re.test(value);
      default:
        return false;
    }
  };

  const handlerUpdateField = (
    key: keyof IForm,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setData({ ...data, [key]: e.target.value });
  };

  const getPhoneTextField = (value: string): React.ReactNode => {
    //@ts-ignore
    return () => (
      <div className="form_input">
        {data.phone && data.phone.replace(/[() -+-]/g, "").length > 1 ? (
          formInputError.phone ? (
            <Error className="form_input_icon" />
          ) : (
            <Correct className="form_input_icon" />
          )
        ) : null}
        <input
          name="phone"
          type="text"
          placeholder=" "
          className={
            formInputError.phone
              ? "form_input_field form_input_field__error"
              : "form_input_field"
          }
        />
        <label
          htmlFor="phone"
          className={
            value && value.replace(/[() -+-]/g, "").length > 1
              ? "form_input_label form_input_label__active"
              : "form_input_label"
          }
        >
          Телефон
        </label>
        {formInputError.phone && (
          <div className="form_input_errorMessage">Номер некорректен</div>
        )}
      </div>
    );
  };

  return (
    <div className="form" id="form">
      <Title title="Отправь форму" />
      <div className="form_container">
        <div className="form_inputs">
          <div className="form_input">
            {data.name && data.name.length > 0 ? (
              formInputError.name ? (
                <Error className="form_input_icon" />
              ) : (
                <Correct className="form_input_icon" />
              )
            ) : null}
            <input
              type="text"
              name="name"
              placeholder=" "
              className={
                formInputError["name"]
                  ? "form_input_field form_input_field__error"
                  : "form_input_field"
              }
              onChange={(e) => {
                handlerErrorChange(
                  "name",
                  formValidation("name", e.target.value)
                );
                handlerUpdateField("name", e);
              }}
            />
            <label
              htmlFor="name"
              className={
                data.name && data.name.length > 0
                  ? "form_input_label form_input_label__active"
                  : "form_input_label"
              }
            >
              Имя
            </label>
            {formInputError.name && (
              <div className="form_input_errorMessage">Имя некорректно</div>
            )}
          </div>
          <InputMask
            mask={"+7 (999) 999-99-99"}
            maskChar=" "
            value={data.phone}
            onChange={(e) => {
              handlerErrorChange(
                "phone",
                formValidation("phone", e.target.value)
              );
              handlerUpdateField("phone", e);
            }}
          >
            {getPhoneTextField(data.phone!)}
          </InputMask>
        </div>
        <div className="form_submit">
          <label className="form_submit_checkbox">
            <input
              type="checkbox"
              name="checkbox"
              className="form_submit_checkbox_input"
              onChange={() => setUserAgreement((prevState) => !prevState)}
            />
            Согласен, отказываюсь
          </label>
          <button
            className="form_submit_button"
            disabled={
              Object.values(formInputError).some((value) => value !== false) ||
              !userAgreement ||
              !data.name ||
              data.phone === "+7 (   )    -  -  " ||
              !data.phone
            }
            onClick={() =>
              postMessage(
                data,
                () => {
                  console.log("message send");
                },
                () => {
                  console.log("something went wrong");
                }
              )
            }
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
