import { useAdminAuth } from "../reactHooks";

const AdminAuthentication = props => useAdminAuth(props) && props.children;

export default AdminAuthentication;