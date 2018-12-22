let authenticated = false; //here use jwt

export const isAuthenticated = () => {
    return authenticated;
}

export const setAuthenticated = aut => {
    authenticated = aut;
}