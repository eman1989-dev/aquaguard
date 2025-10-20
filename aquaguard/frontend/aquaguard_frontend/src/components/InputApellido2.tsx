import { useId } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputApellido2Props{
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputApellido2({value, onChange}: InputApellido2Props) {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Segundo apellido</Label>
      <Input id={id} placeholder="Segundo apellido" type="text" value={value} onChange={onChange} required />
    </div>
  )
}
