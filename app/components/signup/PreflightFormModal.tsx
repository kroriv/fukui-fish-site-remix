import { SerializeFrom } from "@remix-run/cloudflare";
import { useNavigate, useNavigation } from "@remix-run/react";
import { loader as signupLoader, action as signupAction } from "~/routes/signup._index";
import { ValidatedForm } from "remix-validated-form";
import { preflightSchema } from "~/schemas/signup";
import Modal from "~/components/Modal";
import EmailInput from "~/components/signup/form/EmailInput";
import Submitting from "~/components/signup/form/Submitting";

interface PreflightFormModalProps {
  loaderData: SerializeFrom<typeof signupLoader>;
  actionData: SerializeFrom<typeof signupAction>;
}
export default function PreflightFormModal({ ...props }: PreflightFormModalProps) {
  return (
    <Modal 
      isOpen={ (props.loaderData && props.loaderData.ref === "preflight") as boolean } 
      head={ _Head() }
      body={ _Body({ actionData: props.actionData }) }
    />
  );
}

const _Head = () => {
  // Navigate
  const navigate = useNavigate();
  return (
    <>
      <p>メールアドレス認証</p>
      <span 
        className={ "modal-cancel-button" } onClick={ () => navigate("/signup") }
      >
        キャンセル
      </span>
    </>
  );
};

const _Body = ({ ...props }: { actionData: SerializeFrom<typeof signupAction> }) => {
  // Navigate
  const navigation = useNavigation();
  // ActionData
  const actionData = props.actionData;
  
  return (
    <>
      { /* フォーム */ }
      <ValidatedForm
        replace
        validator={ preflightSchema } 
        method={ "POST" }
      >
        <EmailInput name={ "preflight[email]"} actionData={ actionData }/>
        <input type={ "hidden" } name={ "form" } value={ "preflight" } placeholder={ "" }/>
        <button 
          type={ `${ navigation.state === "idle" ? "submit" : "button" }` } 
          className={ "button button--primary" }
          disabled={ navigation.state === "submitting" }
        >
          { navigation.state !== "submitting" ? "メールを送信" : "お待ちください" }
        </button>
      </ValidatedForm>
      { /* ローディング */ }
      <Submitting state={ navigation.state } />
    </>
  );
};