import { useId } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputTelefonoProps{
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputTelefono({value, onChange}: InputTelefonoProps) {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Número telefónico</Label>
      <Input id={id} placeholder="Número telefónico" type="number" value={value} onChange={onChange} required />
    </div>
  )
}
