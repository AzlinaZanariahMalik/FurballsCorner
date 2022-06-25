export const userIsAdmin = currentUser => {
    //user is not admin
    if(!currentUser || !Array.isArray(currentUser.userRoles)) return false;
    //get user role
    const { userRoles } = currentUser;
    // check the user role if admin
    if (userRoles.includes('admin')) return true;

    //otherwise return false
    return false;
}