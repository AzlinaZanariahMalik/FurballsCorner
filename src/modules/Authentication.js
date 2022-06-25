import { useAuth } from "./../reactHooks";
import { withRouter } from "react-router-dom";
const Authentication = props => useAuth (props) && props.children;

export default withRouter(Authentication); 