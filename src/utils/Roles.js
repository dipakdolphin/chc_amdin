import jwtDecode from "jwt-decode";

const Roles = (requestRoles) => {

    const token = localStorage.getItem('token');
    const user = jwtDecode(token);
    const role = user.authorities;
    return requestRoles.includes(role)


};

export default Roles;
