// AUTH STATE
function setAuth(name, role){
  sessionStorage.setItem("displayName", name);
  sessionStorage.setItem("userRole", role);
}

// CHECK AUTH
function isAuthenticated(){
  return (
    sessionStorage.getItem("displayName") &&
    sessionStorage.getItem("userRole")
  );
}

// GET USER
function getUser(){
  return {
    name: sessionStorage.getItem("displayName"),
    role: sessionStorage.getItem("userRole")
  };
}

// LOGOUT
function logout(){
  sessionStorage.clear();
  window.location.href = "adminlogin.html";
}
