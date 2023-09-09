import React from "react";
import {Input} from "@nextui-org/react";
import { Mail } from "lucide-react"; 
import { Button } from "@nextui-org/react";
export default function EmailOnModal() {


  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
              key={"ok"}
              type="email"
              label="Email"
              description={"exampple@email.com | Add  your e-mail on which you want to get notified"}
            />
        </div>
        <Button variant="flat" color="primary"><Mail/> Let me know</Button>
      </div>  
    </div>  
  );
}
