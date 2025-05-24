'use client';
import SmartToyIcon from "@mui/icons-material/SmartToy";
import {Input, Link, Button} from "@/shared/ui";

const Login = () => {
  return (
    <div className="flex w-full h-[100vh]">
      <div className="w-[50%] h-[100vh] bg-[#4C585B] flex justify-end items-center">
        <div className="w-[80%] h-[70%] shadow-2xl flex justify-center items-center gap-2 text-[#FFFFFF]">
          <SmartToyIcon fontSize="large" />
          <h1 className="text-3xl font-bold ">Owen App</h1>
        </div>
      </div>
      <div className="w-[50%] h-[100vh] bg-[#FFFFFF] flex justify-start items-center">
        <div className="w-[80%] h-[70%] shadow-2xl flex justify-center items-center">
          <div className="w-[50%] grid grid-cols-1 gap-5 mt-[40px]">
            <h1 className="text-center text-3xl font-bold text-[#4C585B] mb-[40px]">LOGIN</h1>
            <Input type="text" label="ID" autoFocus />
            <Input type="password" label="Password" />
            <Input type="number" label="OTP" />
            <div className="flex justify-end items-center gap-5">
              <Link href="#" displayText="Forgot password" />
              <Link href="#" displayText="Register OTP" />
            </div>
            <Button type="submit" displayText="Login" size="large" className="h-[60px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
