"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { PlusCircle } from "lucide-react"
import { useState } from "react"

export function ButtonAddCar() {

const [openDialog, setOpenDialog]= useState(false)

  return (
    <Dialog open={openDialog}>
       <DialogTrigger>
         <Button variant="outline" onClick={()=>setOpenDialog(true)}>
            Add new car
            <PlusCircle className="ml-2"/>
         </Button>
       </DialogTrigger>
       <DialogContent>
        <DialogHeader>
           <DialogDescription>
             <p>Form to add a new car</p>
           </DialogDescription>
         </DialogHeader>
       </DialogContent>
    </Dialog>
  )
}
