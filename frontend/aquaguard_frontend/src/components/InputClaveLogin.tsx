import { useId } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputClaveLoginProps{
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputClaveLogin({value, onChange}: InputClaveLoginProps) {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Contraseña</Label>
      <Input id={id} placeholder="Contraseña" type="password" value={value} onChange={onChange} required />
    </div>
  )
}