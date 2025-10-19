import { useId } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputApellido1Props{
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputApellido1({value, onChange}: InputApellido1Props) {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Primer Apellido</Label>
      <Input id={id} placeholder="Primer Apellido" type="text" value={value} onChange={onChange} required />
    </div>
  )
}
