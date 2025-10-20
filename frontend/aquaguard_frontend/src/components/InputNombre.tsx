import { useId } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputNombreProps{
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputNombre({value, onChange}: InputNombreProps) {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Nombre</Label>
      <Input id={id} placeholder="Nombre" type="text" value={value} onChange={onChange} required />
    </div>
  )
}
