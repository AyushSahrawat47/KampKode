import Button1 from "./Button1";
import PropTypes from "prop-types";

const NavigationActions = ({ className = "" }) => {
  return (
    <div
      className={`w-[190px] flex flex-row items-center justify-start gap-3 ${className}`}
    >
      <Button1
        iconTrailing={false}
        iconLeading={false}
        propBorder="1px solid #e9d7fe"
        propPadding="8px 17px"
        propBackgroundColor="#f9f5ff"
        propGap="8px"
        propWidth="83px"
        propFlex="unset"
        arrowForward="pending_I1:23124;1624:262067;3466:460474"
        propHeight="20px"
        propWidth1="20px"
        propOverflow="hidden"
        primaryLabel="Log in"
        propColor="#6941c6"
        propTextDecoration="none"
        propDisplay="inline-block"
        propMinWidth="47px"
        placeholder="pending_I1:23124;1624:262067;3466:461747"
        propHeight1="20px"
        propWidth2="20px"
      />
      <Button1
        iconTrailing={false}
        iconLeading={false}
        propBorder="1px solid #7e56d9"
        propPadding="8px 17px"
        propBackgroundColor="#7e56d9"
        propGap="8px"
        propWidth="unset"
        propFlex="1"
        arrowForward="pending_I1:23124;1624:262069;3466:411727"
        propHeight="20px"
        propWidth1="20px"
        propOverflow="hidden"
        primaryLabel="Sign up"
        propColor="#fff"
        propTextDecoration="none"
        propDisplay="inline-block"
        propMinWidth="59px"
        placeholder="pending_I1:23124;1624:262069;3466:424758"
        propHeight1="20px"
        propWidth2="20px"
      />
    </div>
  );
};

NavigationActions.propTypes = {
  className: PropTypes.string,
};

export default NavigationActions;
