import React from 'react'

const UserContext= React.createContext({});

const AuthProvider=(props)=>{
const [user,setUser]=React.useState()
const [profile,setProfile]=React.useState("test")
const [scale,setscale]=React.useState("test")


 const profileData=(data)=>{

    setProfile(data)
 }
 const scaleSelection=(data)=>{

   setscale(data)
}
 const userData=(data)=>{

    setUser(data)
 }
const authValues={
userData,user,profile,profileData,scaleSelection,scale

}
console.log("object")
    return <UserContext.Provider value={authValues} {...props} />
}

const auth=()=>React.useContext(UserContext);

export {AuthProvider,auth,UserContext};