import { useAuth } from "./../reactHooks";

const Authentication = props => useAuth (props) && props.children;

export default Authentication; 